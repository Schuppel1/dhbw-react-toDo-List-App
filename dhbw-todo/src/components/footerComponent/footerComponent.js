import React, {useState} from "react";
import "./footerComponent.css";

export const FooterComponent = ({src, alt}) => {

return <>
<div className="footer">
<img className="footerImg" src={src} alt={alt}/>
  </div>
</>

}