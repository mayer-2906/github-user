import {
  OBTENER_USUARIO, 
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  CERRAR_SESION
} from '../../types/index'

export default (state, action) => {
  switch (action.type){
    case LOGIN_EXITOSO:
      return{
        ...state,
        user: action.payload[0],
        lista:action.payload[1]
      }
      case LOGIN_ERROR:
        return{
          ...state,
          mensaje: action.payload
        }
    case CERRAR_SESION:
      return{
        ...state,
        mensaje:null,
        user:null
      }
  }
}