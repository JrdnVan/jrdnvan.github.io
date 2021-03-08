import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';
import FollowMe from './pages/FollowMe/FollowMe';
import Main from './pages/Main/Main';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1A202C'
    },
    secondary: {
      main: '#FFC821'
    }
  },
  typography: {
    fontFamily: [
      'Courier New',
      'monospace',
    ].join(','),
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact">
            <FollowMe />
          </Route>
          <Route path="">
            <Main />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
