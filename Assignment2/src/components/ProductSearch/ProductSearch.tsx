import React, { useRef, useState } from 'react';
import styles from './ProductSearch.module.css';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { barcodeOutline, closeOutline, searchOutline } from "ionicons/icons";
import ProductModal from '../ProductModal/ProductModal';

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
                        <IonButton>
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
