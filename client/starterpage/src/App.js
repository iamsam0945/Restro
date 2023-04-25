import "./App.css";
import { Container, Navbar } from "react-bootstrap";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Topbar from './components/Topbar';
import About from "./components/about";
import Contact from "./components/contact";
import Policy from "./components/policy";
import NavBar from "./components/Navbar";
import Homescreen from "./screen/Homescreen";
import CartScreen from "./screen/CartScreen";
import Register from "./screen/register";
import Login from "./screen/login";

function App() {
  return (
    <BrowserRouter>
     <Topbar/>
     <NavBar/>
     <Switch>
     <Route path='/register' component={Register} exact/>
     <Route path='/login' component={Login} exact/>
     <Route path='/cart' component={CartScreen} exact/>
      <Route path='/about' component={About} exact/>
      <Route path='/contact' component={Contact} exact/>
      <Route path='/policy' component={Policy} exact/>
      <Route path='/' component={Homescreen} exact/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
