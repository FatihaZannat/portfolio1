
import './App.css';
import Header from './Component/Header/Header';
import Home from './Component/Header/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Contact from './Component/Contact/Contact';

import Projects from './Component/Project\'s/Projects';

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
        
        <Route path="/project">
          <Projects/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
      </Router>

       
     
    </div>
  );
}

export default App;
