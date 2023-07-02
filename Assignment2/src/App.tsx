import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, fileTrayFull, home, information, square, star, triangle } from 'ionicons/icons';
import Home from './pages/Home';
import Favourite from './pages/Favourite';
import Products from './pages/Products';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


/* Theme variables */
import './theme/variables.css';
import About from "./pages/About";

setupIonicReact();

const stopScan = () => {
  document.querySelector("body")?.classList.remove('qrscanner');
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};

const App: React.FC = () => (

  <>
  <IonApp className="scanner-hide">
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/favourite">
            <Favourite />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">Home
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="favourite" href="/favourite">
            <IonIcon aria-hidden="true" icon={star} />
            <IonLabel>Favourite</IonLabel>
          </IonTabButton>
          <IonTabButton tab="products" href="/products">
            <IonIcon aria-hidden="true" icon={fileTrayFull} />
            <IonLabel>Products</IonLabel>
          </IonTabButton>
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={information} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  <div className="scanner-ui">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Scanner</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={stopScan}>Stop Scan</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
</div>
  </>
);

export default App;
