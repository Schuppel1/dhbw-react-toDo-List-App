import React from "react";
import logo from '../../hero_image.svg';
import { WelcomeComponent } from "../welcomeComponent/welcomeComponent";

export const StartPageComponent = () => {

    return <>
    <WelcomeComponent src={logo} alt={"Person with a List"} team={"Philipp, Arthur, Chris, Sven und Paul"} visibility={true}/>
    </>
};