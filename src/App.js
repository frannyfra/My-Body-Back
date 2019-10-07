import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Menu from './components/Menu/Menu';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
    

    <Router>
    <Route exact path="/" component={PrivacyPolicy} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/about" component={About} />
    </Router>
    
    </div>
  );
}

export default App;
