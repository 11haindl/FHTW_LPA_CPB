import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Products.css';
import History from '../components/History/History'

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Produkte - History</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <History/>
      </IonContent>
    </IonPage>
  );
};

export default Products;
