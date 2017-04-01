import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import App from './app';
import {HashRouter, Route, IndexRoute} from 'react-router-dom';
import GameDetail from './game_detail';
import Header from './header';


class Root extends React.Component {

  render () {
    return (
      <HashRouter>
        <div>
          <Header/>
          <Route path="/" component={ Home } />
          <Route path="/games/:gameId" component={ GameDetail} />
        </div>
      </HashRouter>
    );
  }
}


export default Root;
