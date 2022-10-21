import React from "react";
import logo from '../../hero_image.svg';
import footer_logo from '../../footer_logo_weiß.png';
import { WelcomeComponent } from "../welcomeComponent/welcomeComponent";
import { FooterComponent } from "../footerComponent/footerComponent";

export const StartPageComponent = () => {


    let isWelcomeActive = true; 

    const welcomeActive =  <>
    <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} visibility={true}/>
    <FooterComponent src={footer_logo} alt={"DHBW Logo"}/>
    </>;

    const listActive = <>
    <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} visibility={false}/>
    <FooterComponent src={footer_logo} alt={"DHBW Logo"}/>
    </>;



    if (isWelcomeActive) {
        return welcomeActive;
    } else {
        return listActive;
    }

    function switchContext() {
        isWelcomeActive = !isWelcomeActive;
    }
};

