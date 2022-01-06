import './App.css';
import * as React from 'react';

import Header from './component/Header';

import {
  Route, Switch, useLocation,
} from 'react-router-dom';
import Home from './component/Home';
import Details from './component/Details';


function App() {
  const {pathname} = useLocation();
  React.useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  return (
    <div className="container">
    <Header/>
    <main>
      <Switch>
      <Route path="/country/:id">
        <Details/>
      </Route>
        <Route path="/">
        <Home/>
        </Route>
      </Switch>
    </main>
    </div>
  );
}

export default App;
