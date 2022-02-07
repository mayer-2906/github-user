import { useReducer } from "react";

import axios from 'axios';

import AuthReducer from "./AuthReducer";

import AuthContext from "./AuthContext";

import {
  OBTENER_USUARIO, 
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types/index'

const AuthState = (props) => {

  
  const initialState = {
    user:null,
    mensaje:null,
    lista:null
  };

  //cargamos la notas con useReducer
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  //const cargar=true;

  const login = async (usuario) => {

    try{
      const data= await axios.get(`https://api.github.com/users/${usuario.username}/repos?`);
      console.log(data.data);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: [usuario.username,data.data]
      })
      return true;
    }catch(e){
      dispatch({
        type: LOGIN_ERROR,
        payload: "usuario no encontrado"
      })
      return false;
    }   
  }

 return (
    <AuthContext.Provider
      value={{
        usuarioAuth:state.user,
        login,
        mensaje:state.mensaje,
        lista: state.lista
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;