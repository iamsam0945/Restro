import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Topbar from './components/Topbar';
import About from "./components/about";
import Contact from "./components/contact";
import Policy from "./components/policy";
import NavBar from "./components/Navbar";
import Homescreen from "./screen/Homescreen";

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <NavBar/>
     <Switch>
      <Route path='/about' component={About} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/policy' component={Policy} exact/>
      <Route path='/' component={Homescreen} exact/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
