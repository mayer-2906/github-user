import { useReducer, useContext } from 'react'

import axios from 'axios';

import RepositorioReducer from './RepositorioReducer'
import RepositorioContext from './RepositorioContext'
import AuthContext from '../auth/AuthContext';
import {
  OBTENER_REPOS,
  AGREGAR_FAVORITO,
  ELIMINAR_FAVORITO
} from '../../types/index'

const RepositorioState = (props) => {

  
  const initialState = {
    listaRepos:[],
    favoritos:[]
  };

  const { usuarioAuth } = useContext(AuthContext);
  //cargamos la notas con useReducer
  const [state, dispatch] = useReducer(RepositorioReducer, initialState)
  //const cargar=true;

  const cargarRepos = (lista) => {
      dispatch({
        type: OBTENER_REPOS,
        payload: lista
      })
      getFavoritos();
      
  }

  const agregarFavoritos = async (repositorio) => {
   
      const repofavorito = await state.listaRepos.filter(repo=>repo.id===repositorio.id)
      /*if(!state.favoritos.includes(repofavorito)){*/
      dispatch({
        type: AGREGAR_FAVORITO,
        payload: repofavorito
      })
      localStorage.setItem("favoritos",JSON.stringify(state.favoritos));
    /*}*/
    
  }

  const getFavoritos = async () => {
    const fav = await JSON.parse(localStorage.getItem("favoritos"))
    if(fav.length!=0){
      state.favoritos=[];
      fav.forEach(e=>{
        state.favoritos.push(e[0]);
      });      
    }   
    return state.favoritos; 
  }

  const eliminarFavorito = () => {

  }

 return (
    <RepositorioContext.Provider
      value={{
        listaRepos:state.user,
        favoritos:state.favoritos,
        agregarFavoritos,
        eliminarFavorito,
        cargarRepos,
        getFavoritos
      }}
    >
      {props.children}
    </RepositorioContext.Provider>
  )
}

export default RepositorioState;