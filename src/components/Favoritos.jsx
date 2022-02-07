import { useContext, useState, useEffect } from "react";
import styled from "@emotion/styled";
import RepositorioContext from "../context/repos/RepositorioContext";
import Repositorio from "./Repositorio";
import "../App.css";


const Table = styled.table`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Favoritos = () => {

  const { favoritos,getFavoritos } = useContext(RepositorioContext);
  
  useEffect(() =>{
    const obtFavoritos =async ()=>{
       const lista = await getFavoritos();
    }
    obtFavoritos();
  },[])


  return (
    <div className="favorites">
      <h1 className="title">Favoritos</h1>
       <Table>
       {
          favoritos.length === 0 ?
          <h1>No hay Repositorios Favoritos</h1>
            : favoritos.map(repo=>(
              <Repositorio key={repo.id} repositorio={repo} />
          ))
        }   
        </Table>

    </div>
   );
}
 
export default Favoritos;