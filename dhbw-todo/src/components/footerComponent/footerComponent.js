import React from "react";
import "./footerComponent.css";

export const FooterComponent = ({src, alt}) => {


  //ein einfacher Footer
  return <>
    <div className="footer">
      <img className="footerImg" src={src} alt={alt}/>
    </div>
  </>

}