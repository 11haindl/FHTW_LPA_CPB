import { IonButton, IonButtons, IonContent, IonIcon, IonImg, IonItem, IonLabel, IonText } from '@ionic/react';
import { heart } from 'ionicons/icons';
import { useEffect, useState } from 'react';

interface ProductDetailProps {
  productData: string;
  wasScanned: boolean
}

const ProductDetail: React.FC<ProductDetailProps> = (productData, wasScanned) => {
  const data = JSON.parse(productData.productData);
  const [isProductInfoAvailable, setIsProductInfoAvailable] = useState(false);
  const storedFavourites = localStorage.getItem("favouriteProducts");
  const favouritesJSON: { barcode: string, name: string }[] = (storedFavourites !== "" && storedFavourites !== null) ? JSON.parse(storedFavourites) : [];
  const scannedProducts = localStorage.getItem("scannedProducts");
  const scannedProductsJSON: { barcode: string, name: string }[] = (scannedProducts !== "" && scannedProducts !== null) ? JSON.parse(scannedProducts) : [];

  useEffect(() => {
    if (data.status === 1) {
      setIsProductInfoAvailable(true);
    }
  }, [isProductInfoAvailable]);

  useEffect(() => {
    console.log("scanned!");
    if(wasScanned && data.status === 1){
      const newScannedProduct = {
        barcode: data.code,
        name: getProductName(),
      };
      scannedProductsJSON.push(newScannedProduct);
      localStorage.setItem("scannedProducts", JSON.stringify(scannedProductsJSON));
    }
  }, [wasScanned, data.status]);

  function getProductName() {
    if (data.product.product_name && data.product.product_name !== "") {
      return data.product.product_name;
    } else if (data.product.product_name_de && data.product.product_name_de !== "") {
      return data.product.product_name_de;
    } else if (data.product.brand) {
      return data.product.brands;
    } else {
      return "";
    }
  }

  function checkForDuplicates() {
    let foundDuplicate = false;
    for (let value of Object.values(favouritesJSON)) {
      if (data.code === value.barcode) {
        foundDuplicate = true;
        break;
      }
    }
    return foundDuplicate;
  }

  function handleAddFavouriteProduct() {
    const isDuplicate = checkForDuplicates();
    console.log(isDuplicate);
    if (!isDuplicate) {
      const newFavouriteProduct = {
        barcode: data.code,
        name: getProductName(),
      };
      favouritesJSON.push(newFavouriteProduct);
      localStorage.setItem("favouriteProducts", JSON.stringify(favouritesJSON));
      console.log("added Favourite");
    }
  }

  return (
    <IonContent className="ion-padding">
      {isProductInfoAvailable ?
        <>
          <IonItem>
            <IonLabel position="stacked">Name:</IonLabel>
            <IonText>{getProductName()}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Marke:</IonLabel>
            <IonText>{data.product.brands}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Produktkategorien:</IonLabel>
            <IonText>{data.product.categories}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Barcode:</IonLabel>
            <IonText>{data.product.code}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Inhalt:</IonLabel>
            <IonText>{data.product.ingredients_text}</IonText>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Allergene:</IonLabel>
            <IonText>{data.product.allergens}</IonText>
          </IonItem><IonItem>
            <IonLabel position="stacked">Bild:</IonLabel>
            <IonImg src={data.product.image_front_url}></IonImg>
          </IonItem>
          <IonButtons>
            <IonButton onClick={handleAddFavouriteProduct}>
              <IonIcon slot='start' icon={heart}></IonIcon>
              zu Favouriten hinzufügen
            </IonButton>
          </IonButtons>
        </>
        :
        <IonItem>
          <IonText>Produkt mit Barcode {data.code} konnte nicht gefunden werden.</IonText>
        </IonItem>
      }
    </IonContent>
  )
};

export default ProductDetail;
