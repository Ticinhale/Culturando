import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonListHeader, IonLabel, IonMenuToggle, IonItem, IonButtons, IonBackButton} from '@ionic/react';
import {add} from 'ionicons/icons';
import './Quiz.css';
import { IonButton } from '@ionic/react';
import '@ionic/react/css/core.css';

const QuizGeral: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
    <IonTitle size="large">Culturando</IonTitle>
      <IonButtons slot="start">
        <IonBackButton text="Voltar" icon="add" />
      </IonButtons>
    </IonToolbar>
  </IonHeader>
  </IonPage>
  );
};

export default QuizGeral;