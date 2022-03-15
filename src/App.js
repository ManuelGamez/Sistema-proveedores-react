import logo from './logo.svg';
import './App.css';
import Home from './Componentes/PaginaInicial/Home'
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
    <Route exact path="/"            component={Home} />
  </Switch>
  </Router>
    </>
  );
}

export default App;
