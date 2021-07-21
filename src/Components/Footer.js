import React from 'react';
import List from '@material-ui/core/List';
import { StepConnector } from '@material-ui/core';
 const Footer=() =>{
     return(
         <div style={{textAlign:'center', background:'black',color:'white',
         padding:'1.5rem'}}>
             <div style={{padding:'1.5rem'}}>
             <i class="fab fa-facebook" style={{color:'white',fontSize:"48px"}}></i>
             <i class="fab fa-twitter" style={{color:'white',fontSize:"48px"}}></i>
             <i class="fab fa-youtube" style={{color:'white',fontSize:"48px"}}></i>
             <i class="fab fa-instagram" style={{color:'white',fontSize:"48px"}}></i>
             </div>
            <p> Copyright © 2021 janagalam. All rights reserved</p>
    </div>
     );
 };
 export default Footer;