import logo from './logo.svg';
import './App.css';
import Home from './Componentes/PaginaInicial/Home';
import BodyInformacion from './Componentes/InformacionIndividual/BodyInformacion';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
    <>
<Router >
  <Switch>
    <Route exact path="/"                     component={Home} />
    <Route exact path="/InformacionProveedor"  component={BodyInformacion}/>
  </Switch>
  </Router>
    </>
  );
}

export default App;
