import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import Profiles from '@views/Profiles';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Profiles} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
