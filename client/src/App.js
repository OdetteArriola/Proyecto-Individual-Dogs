import './App.css';
import { Detail, Form, Home, LandingPage } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";
import { Switch } from 'react-router-dom';

function App() {

  // const location = useLocation();

  return (
    <div className="App">
      <Switch>
      {/* {location.pathname!=="/"&&<NavBar />} */}
      <Route exact path="/" component={LandingPage} />
      <Route path="/ruta/:id" component={Detail} />
      <Route path="/home" component={Home} />
      
      <Route path="/create" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
