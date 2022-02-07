import { Fragment, useState, useContext} from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "@emotion/styled";
import AuthContext from "../../context/auth/AuthContext";
import logoGitHub from "../img/logoGitHub.png"
import '../../App.css'

const LoginButton = styled.input`
  margin: auto;
  margin-top:10px;
  width: 80%;
  height: 30px;
  padding: 5px;
  background-color: var(--soft-pink);
  border: 2px solid var(--aegear-blue);
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500px;
  color: #fff;
`;

const IniciarSesion = styled.button`
  margin: auto;
  margin-top:10px;
  width: 80%;
  height: 40px;
  padding: 5px;
  padding-bottom: 5px;
  background-color: var(--line-div);
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500px;
  color: #fff;
  text-align: center;
  align-content: center;
`;

const Login = () => {
  const navigateTo = useNavigate()

  const [usuario, setUsuario]=useState(
    {
      username: "",
      token: ""
    }    
  )

  const { usuarioAuth, mensaje, login} = useContext(AuthContext);

  const ingresar = async (e) =>{
    e.preventDefault();

    if(usuario.username!="" && usuario.token!=""){
      const isAuth =await login(usuario);
      console.log(isAuth);
        if(isAuth){
         
          setUsuario({
            username: "",
            token: "",
          });
          navigateTo("/repositorios")          
        }           
    }
  }

  return ( 
    <Fragment>
      <div className="container-login">
        <div className="container-imagen" >
          <img className="imagen"src={logoGitHub} alt="GitHub" />
        </div>
        <h1 className="title">Login</h1>
        {
          mensaje!=null? <div className="error">{mensaje}</div> : null
        }
        <form 
          className="login"
          onSubmit={ingresar}
        >
          <LoginButton
             id="logInEmail"
             type="text"
             value={usuario.username}
             placeholder="Nombre de Usuario"
             onChange={(e)=>setUsuario({...usuario,username:e.target.value})}
          />
          <LoginButton
            id="logInPassword"
            type="text"
            value={usuario.token}
            placeholder="Token"
            onChange={(e)=>setUsuario({...usuario,token:e.target.value})}
          />
          <IniciarSesion
            //class="loginButtons init"
            id="logInBtn"
            type="submit"
          >
            Ingresar
          </IniciarSesion>          
        </form>
        <div className="opciones">
        <Link 
          to="#"
          className="link"
        >
          Olvido su token?
        </Link>
        <Link 
          to="#"
          className="link"
        >
          Crear Cuenta Nueva
        </Link>
        </div>
      </div>
    </Fragment>
   );
}
 
export default Login;