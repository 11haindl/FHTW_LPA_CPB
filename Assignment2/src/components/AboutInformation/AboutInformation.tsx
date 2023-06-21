import React, { FC } from 'react';
import "./AboutInformation.module.css"
import data from "../../../package.json"
import { IonCol, IonGrid, IonRow } from '@ionic/react';

interface AboutInformationProps { }

const AboutInformation: React.FC<AboutInformationProps> = () => {

  return (
    <div className="container">
      <IonGrid>
        <IonRow className="grid-container">
          <IonCol>Name:</IonCol>
          <IonCol>Peter Siele</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>E-Mail:</IonCol>
          <IonCol>peter.silie@garten.at</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Version:</IonCol>
          <IonCol>{data.version}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Projectname:</IonCol>
          <IonCol>{data.name}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Description:</IonCol>
          <IonCol>{data.description}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>React Version:</IonCol>
          <IonCol>{data.dependencies.react}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Ionic Version:</IonCol>
          <IonCol>{data.dependencies['@ionic/react']}</IonCol>
        </IonRow>
        <IonRow>
          <IonCol>Capacitor Core Version:</IonCol>
          <IonCol>{data.dependencies['@capacitor/core']}</IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}

export default AboutInformation;
