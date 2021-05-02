
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Header/Home/Home';
import Particles from 'react-particles-js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Contact from './Component/Contact';
import Services from './Component/Services/Services';

function App() {
  return (
    <div >
      <Router>
      <Header/>
      
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/contact"> 
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/services">
          <Services/>
        </Route>
      </Switch>
      </Router>

       
     
    </div>
  );
}

export default App;
