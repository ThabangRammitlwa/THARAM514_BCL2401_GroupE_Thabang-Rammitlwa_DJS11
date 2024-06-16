// src/App.js
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Show from './components/Show';
import Preview from './components/Preview';
import Genre from './components/Genre';
import Season from './components/Season';
import Episode from './components/Episode';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Show</Link></li>
            <li><Link to="/preview">Preview</Link></li>
            <li><Link to="/genre">Genre</Link></li>
            <li><Link to="/season">Season</Link></li>
            <li><Link to="/episode">Episode</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Show} />
          <Route path="/preview" component={Preview} />
          <Route path="/genre" component={Genre} />
          <Route path="/season/:id" component={Season} />
          <Route path="/episode/:id" component={Episode} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

