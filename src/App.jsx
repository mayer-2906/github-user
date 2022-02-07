import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import RepositorioState from './context/repos/RepositorioState';
import Repositorios from "./components/Repositorios"
import Favoritos from './components/Favoritos';
import Layout from './components/Layout';
import Login from "./components/auth/Login"
import './App.css';

function App() {
  return (
    <AuthState>
    <RepositorioState>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route element={<Layout/>}>
              <Route exact path="/repositorios" element={<Repositorios/>}/>
              <Route exact path="/favoritos" element={<Favoritos/>}/>
            </Route>            
          </Routes>
        </div>
      </Router>
    </RepositorioState>
    </AuthState>
  );
}

export default App;
