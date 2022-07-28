import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonListHeader, IonLabel, IonMenuToggle, IonItem} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CULTURANDO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList class="lista">
        <IonListHeader class="azul">
          Configurações
        </IonListHeader>
        <IonMenuToggle auto-hide="false">
          <IonItem>
            <IonIcon slot="start" name='home'></IonIcon>
            <IonLabel text-alignment="center">
              Idioma
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" name='home'></IonIcon>
            <IonLabel text-alignment="center">
              Configurações de leitura
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon slot="start" name='home'></IonIcon>
            <IonLabel text-alignment="center">
              Créditos
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
