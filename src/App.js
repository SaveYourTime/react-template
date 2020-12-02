import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import GlobalStyle from './styles/GlobalStyle';
import StyledContainer from './styles/StyledContainer';
import PrivateRoute from './components/shared/PrivateRoute';
import Header from './components/shared/Header';
import Auth from './pages/AuthPage';
import Public from './pages/PublicPage';
import Protected from './pages/ProtectedPage';

const App = () => (
  <Router history={history}>
    <GlobalStyle />
    <Header />
    <StyledContainer>
      <Switch>
        <Route exact path="/">
          <Public />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <PrivateRoute path="/protected">
          <Protected />
        </PrivateRoute>
      </Switch>
    </StyledContainer>
  </Router>
);

export default App;
