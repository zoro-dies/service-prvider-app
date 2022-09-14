import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SingleService from './pages/SingleService';

import Cart from './pages/Cart';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";




function App() {
  return (
    <Router>

    <Routes>
      <Route exact path = "/" element = {<Home/>} />
      <Route exact path = "/product/:id" element = {<SingleService/>} />
      <Route exact path = "/cart" element = {<Cart/>} />
      
    </Routes>

    </Router>
  );
}

export default App;
