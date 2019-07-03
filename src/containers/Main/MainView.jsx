import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import createRoutes from '../../routes';

const mapRoutes = (routeProps) => {
  const {
    component,
    path,
    key,
    ...rest
  } = routeProps;

  return (
    <Route {...rest} path={path} key={`route-${key}`} component={component} />
  );
};

class MainComponent extends PureComponent {
  render() {
    // const { store } = this.props;

    const routes = createRoutes(_STORE);

    const Primary = routes.primary.map(mapRoutes);

    return (
      <Switch>
        {Primary}
      </Switch>
    );
  }
}


MainComponent.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // store: PropTypes.object.isRequired,
};

MainComponent.defaultProps = {
};


export default MainComponent;
