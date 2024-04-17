import './App.css';
import Principal from './Components/Principal/Principal.js';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header/>
        <Principal/>
      <Footer/>
    </div>
  );
}

export default App;
