import React, { useEffect, useRef, useState } from 'react';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonModal, IonRow, IonText, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { barcodeOutline, closeOutline, searchOutline, star } from "ionicons/icons";
import ProductModal from '../ProductModal/ProductModal';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { Haptics } from '@capacitor/haptics';

interface ProductSearchProps { }

const ProductSearch: React.FC<ProductSearchProps> = () => {
  const [barcode, setBarcode] = useState('');
  const [isModalTriggered, setIsModalTriggered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isToastOpen, setIsToastOpen] = useState(false);
  const toastMessage = "Barcode konnte nicht gescannt werden. Bitte versuchen Sie es nochmal, oder verwenden sie einen anderen Barcode."
  const [err, setErr] = useState<string>();


  const handleClick = async () => {
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

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const status = await BarcodeScanner.checkPermission({ force: true });

        if (status.granted) {
          return true;
        }

        return false;
      } catch (error: any) {
        setErr(error.message);
      }
    };

    checkPermission();

    return () => {

    }
  }, []);


  const startScan = async () => {
    document.querySelector("body")?.classList.add('qrscanner');
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      await Haptics.vibrate();
      setBarcode(result.content);
      document.querySelector("body")?.classList.remove('qrscanner');
      handleClick();
    } else {
      setIsToastOpen(true);
    }
  };

  // barcode sample: 90169069

  return (
    <div id="home-container" className="container">
      <IonGrid>
        <IonRow>
          <IonCol size="8">
            <IonItem>
              <IonInput label="Produktsuche" placeholder="Geben Sie ein Produkt ein" value={barcode} onIonInput={(e: any) => setBarcode(e.target.value)}></IonInput>
            </IonItem>
          </IonCol>
          <IonCol size="4">
            <IonButton id="search-button" onClick={handleClick}>
              <IonIcon slot="icon-only" icon={searchOutline}></IonIcon>
            </IonButton>
            <IonButton id="scanner-button" onClick={startScan} >
              <IonIcon slot="icon-only" icon={barcodeOutline}></IonIcon>
            </IonButton>
          </IonCol>
        </IonRow>
        <IonLoading isOpen={isLoading} message="Loading..." spinner="circles"></IonLoading>
      </IonGrid>
      {
        isModalTriggered ?
          <ProductModal barcode={barcode} onModalDismiss={handleModalDismiss} onDataLoaded={handleLoading} />
          :
          null
      }
      <IonToast position='middle' isOpen={isToastOpen} message={toastMessage} duration={5000} onDidDismiss={() => setIsToastOpen(false)}></IonToast>
    </div >
  );
};

export default ProductSearch;
