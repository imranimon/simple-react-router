import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Culture from './components/Culture/Culture';

function App() {

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/culture">
            <Culture></Culture>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
