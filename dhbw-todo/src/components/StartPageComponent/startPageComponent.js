import React, {useState} from "react";

import logo from '../../hero_image.svg';
import footer_logo from '../../footer_logo_weiß.png';
import logoHomeButton from '../../house-chimney-solid.svg'

import { WelcomeComponent } from'../welcomeComponent/welcomeComponent';
import { FooterComponent } from '../footerComponent/footerComponent';
import { ListComponent } from '../listComponent/listComponent'

import "./startPageComponent.css"

// Hier ist die Startseite
export const StartPageComponent = () => {

    // wird benötigt für den Visible State
    const [isWelcomeActive, setVisibility] = useState(true);
    
    // Hier ist die HTML Komponente welche am Start angezeigt wird. 
    const welcomeActive =  <>
        <div>
            <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} toogleFunction={toggleScreen}/>
        </div>
        <div>
            <FooterComponent src={footer_logo} alt={"DHBW Logo"}/>
        </div>
    </>;

    // Hier ist die HTML Komponente welche die Listenseite anzeigt. Beim Wechsel hin und her wird der Zusstand vergessen
    // Das wurde so beabsichtigt. Es wird keine persistente Speicherung gewünscht. (LocalStore. Cookies etc. )
    const listActive = <>
        <div className="listWrapper">
            <img className="homeButton" src={logoHomeButton} alt={"Home Button"} onClick={toggleScreen}></img>
        </div>
        <ListComponent  list={["Hund füttern", "test1", "test2"]}  />
       
    </>;

    // wechselt zwischen Wilkommenseite und Listenseite.
    function toggleScreen () {
        setVisibility(!isWelcomeActive);

    };

    if (isWelcomeActive) {
        return welcomeActive;
    } else {
        return listActive;
    }
};

