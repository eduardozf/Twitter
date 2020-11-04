import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

import NavBar from '../components/NavBar';
import Hightlights from '../components/Highlights';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import NotFound from '../pages/NotFound';

interface IPrivateProps {
  component: any;
  isAuthenticated: boolean;
  [x: string]: any;
}

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }: IPrivateProps) => (
  <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> :
    <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )}
  />
)

const Routes: React.FC = () => {

  const { isAuthenticated } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute isAuthenticated={isAuthenticated} path='/' exact component={() => (
          <Layout>
            <NavBar />
            <Home />
            <Hightlights />
          </Layout>
        )} />

        <Route path="/login" exact component={Login} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
