import React, {useState} from "react";
import "./welcomeComponent.css";


export const WelcomeComponent = ({src, alt, team, toogleFunction}) => {
    

    const welcomeMessage =<>
        <div className="welcomeScreen"> 
        <h1 id="welcomeHeader">Herzlich willkommen zur ToDo-Liste!</h1>
        <p id="team">Dieses Projekt wurde von {team} erstellt</p>
        <img className="logo" src={src} alt={alt}/>
        <button className="welcomeComponentButton" onClick={toogleFunction}>Zur Liste!</button>
        </div>
     </>
    
    return welcomeMessage;
};
