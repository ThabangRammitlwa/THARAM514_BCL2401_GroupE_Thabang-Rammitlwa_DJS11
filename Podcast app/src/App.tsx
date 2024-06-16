import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Show from './components/Show';
import Episode from './components/Episode';
import Genre from './components/Genre';
import Season from './components/Season';
import AudioPlayer from './hooks/Audioplayer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Podcast App</h1>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/favorites">Favorites</a>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Genre />
          <Switch>
            <Route exact path="/">
              <Show />
            </Route>
            <Route path="/show/:showId">
              <Episode />
            </Route>
            <Route path="/favorites">
              <Season />
            </Route>
          </Switch>
        </main>
        <AudioPlayer />
      </div>
    </Router>
  );
};

export default App;