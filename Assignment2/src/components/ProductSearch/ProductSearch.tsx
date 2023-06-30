import React, { useRef, useState } from 'react';
import styles from './ProductSearch.module.css';
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonLoading, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { barcodeOutline, closeOutline, searchOutline } from "ionicons/icons";
import ProductService from '../../services/ProductService';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import ProductDetail from '../ProductDetail/ProductDetail';

interface ProductSearchProps {
    name: string;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ name }) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
    const [barcode, setBarcode] = useState('');
    const [productData, setProductData] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const [message, setMessage] = useState(
        'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );

    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        setIsModalOpen(false);
    }

    const handleClick = async () => {
        setIsLoading(true);

        ProductService.getProductByBarcode(barcode)
            .then(({ data }) => {
                setProductData(JSON.stringify(data));
                setIsModalOpen(true);
            })
            .catch((error) => {
                console.log(error);
            }).finally(() => {
                setIsLoading(false);
            });
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
                        <IonButton>
                            <IonIcon slot="icon-only" icon={barcodeOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
                <IonLoading isOpen={isLoading} message="Loading..." spinner="circles"></IonLoading>
            </IonGrid>
            <IonModal ref={modal} isOpen={isModalOpen} onWillDismiss={(ev) => onWillDismiss(ev)}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Produkt</IonTitle>
                        <IonButtons slot="end">
                            <IonButton strong={true} onClick={() => modal.current?.dismiss()}>
                                <IonIcon slot='icon-only' icon={closeOutline}></IonIcon>
                            </IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <ProductDetail productData={productData}/>
            </IonModal>
        </div>
    );
};

export default ProductSearch;
