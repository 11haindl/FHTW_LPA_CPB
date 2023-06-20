import React, {FC} from 'react';
import styles from './ProductSearch.module.css';
import {IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonRow} from '@ionic/react';
import {barcodeOutline, searchOutline} from "ionicons/icons";
interface ProductSearchProps {
    name: string;
}

const ProductSearch: FC<ProductSearchProps> = ({name}) => {
    return (
        <div className="container">
            <IonGrid>
                <IonRow>
                    <IonCol size="8">
                        <IonItem>
                            <IonInput label="Produktsuche" placeholder="Geben Sie ein Produkt ein"></IonInput>
                        </IonItem>
                    </IonCol>
                    <IonCol size="4">
                            <IonButton>
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
