import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonList, IonListHeader, IonLabel, IonMenuToggle, IonItem, IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CULTURANDO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonGrid fixed={true}>
      <IonRow>
      <IonTitle class="titulo">QUIZZES</IonTitle>
      </IonRow>
      <IonRow>
        <IonCol>
        <IonButton expand="block" routerLink="/quizzes/QuizPais">
          Por País
        </IonButton>
        </IonCol>
        <IonCol>
        <IonButton expand="block" routerLink="/quizzes/QuizContinente">
          Por Continente
        </IonButton>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
        <IonButton expand="block" routerLink="/quizzes/QuizGeral">
          Geral
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

export default Tab2;
