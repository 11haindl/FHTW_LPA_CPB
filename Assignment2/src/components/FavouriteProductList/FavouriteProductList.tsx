import React, { FC, useEffect, useState } from 'react';
import styles from './FavouriteProductList.module.css';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { Product } from '../../features/products';

interface FavouriteProductListProps { }

const FavouriteProductList: React.FC<FavouriteProductListProps> = () => {
  const storedFavourites = JSON.parse(localStorage.getItem("favouriteProducts")!);

  return (
    <IonList>
      {storedFavourites.map((product: Product) => (
        <IonItem key={product.barcode}>
          <IonLabel>{product.name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  );
}

export default FavouriteProductList;