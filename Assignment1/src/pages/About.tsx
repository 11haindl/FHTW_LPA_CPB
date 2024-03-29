import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import AboutInformation from '../components/AboutInformation/AboutInformation';
import ExploreContainer from '../components/ExploreContainer';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <AboutInformation/>
      </IonContent>
    </IonPage>
  );
};

export default About;
