import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Favourite</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Favourite page" />
      </IonContent>
    </IonPage>
  );
};

export default Favourite;
