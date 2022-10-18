import React, {useState} from "react";

let isVisible = true;

export const WelcomeComponent = ({src, alt, team}) => {
    
    const [internalVisibility, setVisibility] = useState(isVisible);

    const welcomeMessage =<div>
        <h1>Willkommen im der DHBW ToDo List Generator </h1>
        <img src={src} alt={alt}/>
        <p>Dieses Projekt wurde von {team} erstellt</p>
        <button class="welcomeComponentButton" onClick={versteckeKomponente}>Los geht!!!</button>
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
        return appMessage; 
    }

    


    
};
