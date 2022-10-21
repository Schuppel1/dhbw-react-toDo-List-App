import React, {useState} from "react";
import logo from '../../hero_image.svg';
import footer_logo from '../../footer_logo_weiß.png';
import { WelcomeComponent } from "../welcomeComponent/welcomeComponent";
import { FooterComponent } from "../footerComponent/footerComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'

export const StartPageComponent = () => {

    

    const [isWelcomeActive, setVisibility] = useState(true);
        const welcomeActive =  <>
        <div>
            <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} toogleFunction={toggleScreen}/>
        </div>
        <div>
            <FooterComponent src={footer_logo} alt={"DHBW Logo"}/>
        </div>
    </>;

    const listActive = <>
        <div>
            <button><i onClick={toggleScreen}> <FontAwesomeIcon icon={ faHouseChimney } /></i></button>
        </div>
        <p>Hier kommt die Liste hin</p>
        <FooterComponent src={footer_logo} alt={"DHBW Logo"}/>
    </>;

    function toggleScreen () {
        setVisibility(!isWelcomeActive);
        console.log("predded")
        console.log(isWelcomeActive)

    };

    if (isWelcomeActive) {
        return welcomeActive;
    } else {
        return listActive;
    }
};

