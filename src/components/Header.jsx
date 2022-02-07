import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import logo from "./img/logoGitHub.png";
import menuHamburguesa from "./img/menuHamburguesa.svg"
import "../App.css"
import { useState } from "react";

const ContainerHeader=styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 20px;
  padding: 10px 20px 10px 20px;
  `;

const Logo=styled.img`
  width: 80px;
  height: 80px;
  background-color:var(--line-div);
  background-size:cover;
  grid-column:1/2;
  margin-bottom: 20px;
  border-radius: 50%;
`;
const CerrarSesion = styled.a`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-column: 3/4;
  color: var(--line-div);
  font-weight: 700px;
  font-size:22px;
`;
const Menu = styled.nav`
  display:flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 1/3;
  @media(max-width: 468px){
    justify-content: flex-start;
    flex-direction: column;
  }
`;

const MenuHamburguesa= styled.img`
  width: 30px;
  height: 30px;
  display: none;
  background-color: var(--line-div);
  @media(max-width: 480px){
    display: block;
    margin-left: 10px;
    margin-top: 20px;
  }
`



const Header = () => {

  const verMenu = ()=>{
    document.querySelector(".barra-nav").classList.add("ver-menu");
  }  
  return (  
    <ContainerHeader>
      <Logo src={logo} alt="GitHub"/>
      <CerrarSesion href="/">Salir</CerrarSesion>
      <Menu
        className="menu-nav"
      >
        <MenuHamburguesa  src={menuHamburguesa} onClick={verMenu}></MenuHamburguesa> 
        <div className="barra-nav">
          <Link
            to="/repositorios"
            className="opcion-nav"
          >
          Respositorios
          </Link>
          <Link
            to="/favoritos"
            className="opcion-nav"
          >
          Favoritos
          </Link>
        </div>        
      </Menu>
    </ContainerHeader>
  );
}
 
export default Header;