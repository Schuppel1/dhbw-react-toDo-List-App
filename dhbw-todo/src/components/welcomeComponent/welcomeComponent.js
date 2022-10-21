import React, {useState} from "react";
import "./welcomeComponent.css";


export const WelcomeComponent = ({src, alt, team, visibility}) => {
    
    const [internalVisibility, setVisibility] = useState(visibility);


    const welcomeMessage =<>
        <div class="welcomeScreen"> 
        <h1 id="welcomeHeader">Herzlich willkommen zur ToDo-Liste!</h1>
        <p id="team">Dieses Projekt wurde von {team} erstellt</p>
        <img class="logo" src={src} alt={alt}/>
        <button class="welcomeComponentButton" onClick={versteckeKomponente}>Zur Liste!</button>
        </div>
     </>


    function versteckeKomponente() {
        setVisibility(false);
    }



    if(internalVisibility) {
        return welcomeMessage;
    } else {
        return ; 
    }
};
