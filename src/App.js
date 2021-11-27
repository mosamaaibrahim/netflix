import { useEffect } from 'react';
import Navbar from './Views/Navbar'
import Home from './Views/Home'

//Redux
import {
  HashRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import { getInit } from './Redux/actions/index'
import init from './API/index';
import SingleMovie from './Views/SingleMovie';
function App(props) {
  useEffect(() => {
    getInit();
  }, [])
  return (
    <div className="bg-prblack px-3 h-screen w-screen overflow-y-auto">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movies/:id" component={SingleMovie} />

        </Switch>
      </Router>
    </div>
  );
}
export default App
