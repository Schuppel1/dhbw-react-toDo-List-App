import React, {useState} from "react";

let isVisible = true;

export const WelcomeComponent = ({src, alt, team, toDoPage}) => {
    
    const [internalVisibility, setVisibility] = useState(isVisible);

    const welcomeMessage =<div>
        <h1>Herzlich willkommen zur ToDo-Liste! </h1>
        <img src={src} alt={alt}/>
        <p>Dieses Projekt wurde von {team} erstellt</p>
        <button className="welcomeComponentButton" onClick={versteckeKomponente}>Los geht!!!</button>
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
