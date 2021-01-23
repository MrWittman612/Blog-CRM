import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageUnderConstruction from './components/atoms/PageUnderConstruction';
import Blog from './pages/Blog';
import FourOFour from './components/atoms/FourOFour';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Blog} path='/' />
        <Route component={PageUnderConstruction} path='/admin' />
        <Route component={FourOFour} path={'*'} />
      </Switch>
    </Router>
  );
}

export default App;
