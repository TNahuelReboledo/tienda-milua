import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
   return (
      <>
         <div>Bienvenidos a Milua</div>
         <NavLink to="/Home">
            Entrar en la tienda
         </NavLink>
      </>
   );
};

export default Landing;
