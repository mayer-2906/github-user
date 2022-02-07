import {
  OBTENER_REPOS,
  AGREGAR_FAVORITO,
  ELIMINAR_FAVORITO
} from '../../types/index'

export default (state, action) => {
  switch (action.type){
    case OBTENER_REPOS:
      return{
        ...state,
        listaRepos: action.payload
      }
      case AGREGAR_FAVORITO:
        return{
          ...state,
          favoritos:[...state.favoritos,action.payload]
        }
    case ELIMINAR_FAVORITO:
      return{
        ...state,
        reposFavoritos:action.payload
      }
  }
}