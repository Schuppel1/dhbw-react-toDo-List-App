import React, {useState} from "react";
import logo from '../../hero_image.svg';
import footer_logo from '../../footer_logo_weiß.png';
import logoHomeButton from '../../house-chimney-solid.svg'
import { WelcomeComponent } from'../welcomeComponent/welcomeComponent';
import { FooterComponent } from '../footerComponent/footerComponent';
import { ListComponent } from '../listComponent/listComponent'
import "./startPageComponent.css"

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
        <div className="listWrapper">
            <img className="homeButton" src={logoHomeButton} alt={"Home Button"} onClick={toggleScreen}></img>
        </div>
        <ListComponent  list={["Hund füttern", "tes1"]}  />
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

