import React from 'react';

import { Route, Redirect, RouteProps } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { name } = useAuth();

  if (!name) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={() => <Component />} />;
};

export default PrivateRoute;
