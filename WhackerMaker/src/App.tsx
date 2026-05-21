import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Toolbar from './components/Toolbar';
import './styles/main.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Toolbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/editor" component={Editor} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;