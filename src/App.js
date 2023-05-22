import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import PlayPage from './components/PlayPage';
import HowToPlayPage from './components/HowToPlayPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="HomePage">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/play">
              <PlayPage/>
            </Route>
            <Route exact path="/how-to-play">
              <HowToPlayPage/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
