import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Panel from './components/Panel';
import Home from './components/Home';
import Pagina from './components/Pagina'; 
import FormIndicador from './components/FormIndicador';
import Feedback from './components/Feedback';
import Ayuda from './components/ayuda';
import Faq from './components/faq';
import Contact from './components/contact';
import RutaProtegida from './components/RutaProtegida'; 
import Detalles from './components/Detalles'
import Borrar from './components/Borrar'
import Recuperar from './components/recuperar'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginForm} />
        <Route path="/detalles/:id" component={Detalles}/>
        <Route path="/borrar" component={Borrar}/>
        <Route path="/recuperar" component={Recuperar}/>
        <RutaProtegida path="/Panel" component={Panel} />
        <RutaProtegida path="/pagina" component={Pagina} />
        <Route path="/añadir" component={FormIndicador} />
        <RutaProtegida path="/reportar" component={Feedback} />
        <RutaProtegida path="/ayuda" component={Ayuda} />
        <RutaProtegida path="/faq" component={Faq} />
        <RutaProtegida path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;