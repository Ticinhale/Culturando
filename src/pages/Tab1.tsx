import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonListHeader, IonLabel, IonMenuToggle, IonItem, IonGrid, IonRow, IonCol} from '@ionic/react';
import {flag } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { IonButton } from '@ionic/react';


const Tab1: React.FC = () => {
  return (
   <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Culturando</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid fixed={true}>
      <IonRow>
        <IonCol>
        <IonButton expand="block" routerLink="/paginas_paises/Mexico">
          <IonIcon slot="start" icon={flag} />
          México
        </IonButton>
        </IonCol>
        <IonCol>
        <IonButton expand="block" routerLink="/paginas_paises/India">
          <IonIcon slot="start" icon={flag} />
          Índia
        </IonButton>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
        <IonButton expand="block" routerLink="/paginas_paises/Espanha">
          <IonIcon slot="start" icon={flag} />
          Espanha
        </IonButton>
        </IonCol>
        <IonCol>
          </IonCol>
      </IonRow>
    </IonGrid>

     


        

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
