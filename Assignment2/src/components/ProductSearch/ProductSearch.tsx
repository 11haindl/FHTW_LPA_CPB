import React, { FC, useEffect, useState } from 'react';
import styles from './ProductSearch.module.css';
import { IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonRow } from '@ionic/react';
import { barcodeOutline, searchOutline } from "ionicons/icons";
import productService from '../../services/ProductService';
interface ProductSearchProps {
    name: string;
}

const ProductSearch: FC<ProductSearchProps> = ({ name }) => {
    const [data, setData] = useState({ data: [] });
    const [barcode, setBarcode] = useState('');
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const handleClick = async () => {
        setIsLoading(true);

        productService.getProductByBarcode(barcode)
            .then(({ data }) => {
                setProduct(data.product);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(product);

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
                        <IonButton onClick={handleClick}>
                            <IonIcon slot="icon-only" icon={searchOutline}></IonIcon>
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={barcodeOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </div>
    );
};

export default ProductSearch;
