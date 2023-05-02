import React from "react";
import './Nav.css';
// import './index';

function Nav(){
    return(
    <nav>
        <img class="logoBranco" src="logoBranco.png" alt="logo"/>
        <ul>
            <li><a href="index.html" class="page animation1"> Início</a></li>
            <li><a href="#sobre" class="page animation2"> Sobre mim</a></li>
            <li><a href="" class="page animation3"> Projetos</a></li>
            {/* <li><a href="#" class="page animation4"> Contato</a></li> */}
        </ul>
    </nav>
    )
}
export default Nav;