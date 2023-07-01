import { IonButton, IonButtons, IonHeader, IonIcon, IonLoading, IonModal, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import { closeOutline } from 'ionicons/icons';
import React, { FC, useEffect, useRef, useState } from 'react';
import ProductService from '../../services/ProductService';
import ProductDetail from '../ProductDetail/ProductDetail';
import styles from './ProductModal.module.css';

interface ProductModalProps {
  barcode: string;
  onModalDismiss: (isModalOpen: boolean) => void;
  onDataLoaded: (isDataLoaded: boolean) => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ barcode, onModalDismiss, onDataLoaded }) => {
  const modal = useRef<HTMLIonModalElement>(null);
  const [productData, setProductData] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isProductInfoAvailable, setIsProductInfoAvailable] = useState(false);

  if (!isModalOpen) {
    ProductService.getProductByBarcode(barcode)
      .then(({ data }) => {
        setProductData(JSON.stringify(data));
        //setIsProductInfoAvailable(true);
      })
      .catch((error) => {
        console.log(error);
        onDataLoaded(true);
        setIsProductInfoAvailable(false);
      }).finally(() => {
        setIsModalOpen(true);
        onDataLoaded(true);
      });
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    setIsModalOpen(false);
    setIsProductInfoAvailable(false);
    onModalDismiss(false);
  }

  return (
    <>
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
        <ProductDetail productData={productData} />
        <IonLoading isOpen={isLoading} message="Loading..." spinner="circles"></IonLoading>
      </IonModal>
    </>
  );
}

export default ProductModal;
