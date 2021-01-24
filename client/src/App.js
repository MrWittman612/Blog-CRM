import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FourOFour from './components/atoms/FourOFour';
// import PageUnderConstruction from './components/atoms/PageUnderConstruction';
import Blog from './pages/Blog';
import BlogAdmin from './pages/BlogAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Blog} path='/' />
        <Route path='/admin'>
          <BlogAdmin />
        </Route>
        <Route component={FourOFour} path={'*'} />
      </Switch>
    </Router>
  );
}

export default App;
