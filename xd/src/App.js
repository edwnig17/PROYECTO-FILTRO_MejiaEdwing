import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Panel from './components/Panel';
import Home from './components/Home';
import Pagina from './components/Pagina'; 
import FormIndicador from './components/FormIndicador';
// import DeleteItem from './components/DeleteItem';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/Panel" component={Panel} />
        <Route path="/pagina" component={Pagina} /> 
        <Route path="/añadir" component={FormIndicador} /> 
        {/* <Route path="/delete" component={DeleteItem} /> */}
          </Switch>
    </Router>
  );
}
export default App;
