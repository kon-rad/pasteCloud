import React, { Component } from 'react';
import PasteCreate from './PasteCreate';
import Header from './Header';
import PasteList from './PasteList';
import PasteShow from './PasteShow';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={PasteCreate} />
              <Route path="/pastes/new" exact component={PasteCreate} />
              <Route path="/pastes/:id" exact component={PasteShow} />
              <Route path="/pastes/list" exact component={PasteList} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
