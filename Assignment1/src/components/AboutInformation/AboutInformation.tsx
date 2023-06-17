import React, { FC } from 'react';
import "./AboutInformation.css"
import data from "../../../package.json"

interface AboutInformationProps {}

const AboutInformation: React.FC<AboutInformationProps> = () => {

return (
   <div className='container'>
      <div className="grid-container"> 
         <div>Name:</div>
         <div>Peter Siele</div>
         <div>E-Mail:</div>
         <div>peter.silie@garten.at</div>
         <div>Version:</div>
         <div>{data.version}</div>
         <div>Projectname:</div>
         <div>{data.name}</div>
         <div>Description:</div>
         <div>{data.description}</div>
      </div>
   </div>
);
}

export default AboutInformation;
