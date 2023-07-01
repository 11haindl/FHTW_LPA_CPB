import React, { FC, useEffect, useState } from 'react';
import styles from './FavouriteProductList.module.css';
import { IonItem, IonLabel, IonList, IonLoading } from '@ionic/react';
import { Product } from '../../features/products';
import ProductModal from '../ProductModal/ProductModal';

interface FavouriteProductListProps { }

const FavouriteProductList: React.FC<FavouriteProductListProps> = () => {
  const storedFavourites = JSON.parse(localStorage.getItem("favouriteProducts")!);
  const [selectedBarcode, setSelectedBarcode] = useState("");
  const [isModalTriggered, setIsModalTriggered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (barcode: string) => {
    setSelectedBarcode(barcode)
    setIsLoading(true);
    setIsModalTriggered(true);
  };


  const handleModalDismiss = (isModalOpen: boolean) => {
    setIsModalTriggered(isModalOpen);
  };

  const handleLoading = (isDataLoaded: boolean) => {
    console.log(isDataLoaded);
    setIsLoading(!isDataLoaded);
  }

  return (
    <>
      <IonList>
        {storedFavourites.map((product: Product) => (
          <IonItem key={product.barcode} onClick={() => handleClick(product.barcode)}>
            <IonLabel>{product.name}</IonLabel>
          </IonItem>
        ))}
        <IonLoading isOpen={isLoading} message="Loading..." spinner="circles"></IonLoading>
      </IonList>
      {isModalTriggered ?
        <ProductModal barcode={selectedBarcode} onModalDismiss={handleModalDismiss} onDataLoaded={handleLoading} />
        :
        <></>
      }
    </>
  );
}

export default FavouriteProductList;