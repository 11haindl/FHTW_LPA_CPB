import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FavouriteProductList from '../components/FavouriteProductList/FavouriteProductList';
import './Favourite.css';

const Favourite: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourite</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FavouriteProductList/>
      </IonContent>
    </IonPage>
  );
};

export default Favourite;
