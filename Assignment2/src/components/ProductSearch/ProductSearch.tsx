import React, { useRef, useState } from 'react';
import styles from './ProductSearch.module.css';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { barcodeOutline, closeOutline, searchOutline, star } from "ionicons/icons";
import ProductModal from '../ProductModal/ProductModal';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

interface ProductSearchProps { }

const ProductSearch: React.FC<ProductSearchProps> = () => {
    const [barcode, setBarcode] = useState('');
    const [isModalTriggered, setIsModalTriggered] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
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

    const startScan = async () => {
        // Check camera permission
        // This is just a simple example, check out the better checks below
        await BarcodeScanner.checkPermission({ force: true });
      
        // make background of WebView transparent
        // note: if you are using ionic this might not be enough, check below
        BarcodeScanner.hideBackground();
      
        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
      
        // if the result has content
        if (result.hasContent) {
          console.log(result.content); // log the raw scanned content
        }
      };

      const stopScan = () => {
        BarcodeScanner.showBackground();
        BarcodeScanner.stopScan();
      };


    // barcode sample: 90169069

    return (
        <div className="container">
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
            {isModalTriggered ?
                <ProductModal barcode={barcode} onModalDismiss={handleModalDismiss} onDataLoaded={handleLoading}/>
                :
                <></>
            }
        </div>
    );
};

export default ProductSearch;
