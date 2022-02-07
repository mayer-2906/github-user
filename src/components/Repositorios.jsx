import styled from "@emotion/styled";
import { useContext, useEffect } from "react";

import RepositorioContext from "../context/repos/RepositorioContext";
import AuthContext from "../context/auth/AuthContext";
import Repositorio from "./Repositorio";

import "../App.css";

const Table = styled.table`
  width: 100%;
  margin: auto;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Repositorios = () => {

  const { cargarRepos } = useContext(RepositorioContext);

  const { lista } = useContext(AuthContext);

  useEffect(() =>{
    cargarRepos(lista)
  }, [])
  return (
    <div className="repos">
      <h1 className="title">Repositorios</h1>
       <Table>
       {
          lista.length === 0 ?
          <h1>No hay Repositorios</h1>
            : lista.map(repo=>(
              <Repositorio key={repo.id} repositorio={repo} />
          ))
        }   
        </Table>

    </div>
   );
}
 
export default Repositorios;