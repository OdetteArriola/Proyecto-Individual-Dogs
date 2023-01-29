import './App.css';
import { Detail, Form, Home, LandingPage } from "./views"
import NavBar from "./components/NavBar/NavBar";
import { Route, useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <div className="App">
      {location.pathname!=="/"&&<NavBar />}
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Form} />
      <Route path="/home/id" component={Detail} />
    </div>
  );
}

export default App;
