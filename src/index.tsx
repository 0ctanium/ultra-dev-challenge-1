import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import {ThemeProvider} from "styled-components";

import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import Browse from "./containers/Browse";

const history = createBrowserHistory();

const theme = {
    primary: '#e50914',
    primaryDarker: '#db0510',
    font: {
        sans: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    }
}

const App = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/login">
            <SignIn />
        </Route>
        <Route exact path="/browse">
            <Browse />
        </Route>
    </Switch>
);

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
          <Router history={history}>
              <App />
          </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
