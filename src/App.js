import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from './components/Details';
function App() {
 
  return (
   
     
  <Router>
         <div className="App">
        <Switch>
          <Route path="/" exact  >
            <Home/>
          </Route>
          <Route path="/:productid" exact  >
            <Details/>
          </Route>
          
        </Switch>
        </div>
      </Router>


   
  );
}

export default App;
