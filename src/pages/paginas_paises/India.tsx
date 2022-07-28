import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonList, IonListHeader, IonLabel, IonMenuToggle, IonButtons, IonBackButton, IonItem, IonThumbnail, IonImg, IonText} from '@ionic/react';
import {arrowBack} from 'ionicons/icons';
import './Informativo.css';
import { IonButton } from '@ionic/react';

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [{ src: 'https://www.estudopratico.com.br/wp-content/uploads/2017/05/significado-da-bandeira-da-india-1200x675.jpg', text: ' ' }];

const India: React.FC = () => {
  return (
   <IonPage>
      <IonHeader>
      <IonToolbar>
      <IonTitle size="large">Culturando</IonTitle>
        <IonButtons slot="start">
          <IonBackButton text="Voltar" icon="arrowBack" />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
    <IonGrid class="corpo" size-xl>
      <IonRow>
      <IonTitle class="titulo">ÍNDIA</IonTitle>
      </IonRow>
      <IonRow>
      <IonList>
      {items.map((image, i) => (
        <IonItem key={i}>
          <IonThumbnail slot="start">
            <IonImg class="bandeira" src={image.src} />
          </IonThumbnail>
          <IonLabel>{image.text}</IonLabel>
        </IonItem>
      ))}
    </IonList>
      </IonRow>
      <IonRow>
      <IonTitle class="subtitulo">Subtitulo</IonTitle>
        <IonText>
          Aqui botamos um texto bem bonito!
        </IonText>
      </IonRow>
      <IonRow>
      <IonTitle class="subtitulo">Subtitulo</IonTitle>
        <IonText class="texto">
           orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </IonText>
      </IonRow>
      <IonRow>
      <IonTitle class="subtitulo">Subtitulo</IonTitle>
        <IonText>
          Aqui botamos um texto bem bonito!
        </IonText>
      </IonRow>
    </IonGrid>
    
    </IonPage>
  );
};

export default India;