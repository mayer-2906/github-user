import { Fragment , useContext} from "react";
import RepositorioContext from "../context/repos/RepositorioContext";
import styled from "@emotion/styled";
import star from "./img/star.png"
import "../App.css";

const Start = styled.img`
    width: 30px;
    height: 30px;
`

const Repositorio = ({repositorio}) => {

  const {agregarFavoritos} = useContext(RepositorioContext)

  const { id, name, description} = repositorio;

  return ( 
    <Fragment>
      <tr>
            <td>
              <h3>{name}</h3>
              <p className="description">{description}</p>  
            </td>            
            <td>
              <Start id={id} clasName="star-fav" src={star} alt="Favorito" onClick={(e)=>agregarFavoritos(repositorio)}/>
            </td>
      </tr>
    </Fragment>
   );
}
 
export default Repositorio;