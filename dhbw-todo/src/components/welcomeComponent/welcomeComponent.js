import React, {useState} from "react";
import "./welcomeComponent.css";

let isVisible = true;

export const WelcomeComponent = ({src, alt, team, toDoPage}) => {
    
    const [internalVisibility, setVisibility] = useState(isVisible);

    const welcomeMessage =<div class="welcomeScreen"> 
        <h1 id="welcomeHeader">Willkommen im der DHBW ToDo List Generator </h1>
        <p id="team">Dieses Projekt wurde von {team} erstellt</p>
        <img class="logo" src={src} alt={alt}/>
        <button class="welcomeComponentButton" onClick={versteckeKomponente}>Zur Liste!</button>
    </div>

    const appMessage = <div>
        <p>trolololol</p>
    </div>  


    function versteckeKomponente() {
        setVisibility(false);
    }

    if(internalVisibility) {
        return welcomeMessage;
    } else {
        return toDoPage; 
    }
};
