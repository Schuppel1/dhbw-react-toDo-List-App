import React, {useState} from "react";
import "./footerComponent.css";

export const FooterComponent = ({src, alt}) => {

return <>
<div class="footer">
<img class="footerImg" src={src} alt={alt}/>
  </div>
</>

}