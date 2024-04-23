import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Principal from './Components/Principal/Principal.jsx';
import Login from './Components/Login/Login.jsx';
import Trabajos from './Components/Trabajos/Trabajos.jsx';
import Error from './Components/Error/Error.jsx';
import Trabajo from './Components/Trabajo/Trabajo.jsx';
import Generador from './Components/Generador/Generador.jsx';
import ProtectedRoute from './Utils/ProtectedRoute.js';
import Contactame from './Components/Contactame/Contactame.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Principal/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/trabajos' element={<Trabajos/>}></Route>
          <Route path='/contactame' element={<Contactame/>}></Route>
          <Route path='/trabajo/:parametro' element={<Trabajo />} />
          <Route element = {<ProtectedRoute/>}>
            <Route path='generador' element={<Generador/>}/>
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
