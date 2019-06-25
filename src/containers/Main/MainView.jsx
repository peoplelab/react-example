import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import createRoutes from '../../routes';


class MainComponent extends PureComponent {
  mapRoutes(props) {
    const { component, ...otherProps } = props;
    const { path, key, ...rest } = otherProps;

    return (
      <Route {...rest} path={path} key={`route-${key}`} component={component} />
    );
  }

  render() {
    const { store } = this.props;

    const routes = createRoutes(store);

    const Primary = routes.primary.map(this.mapRoutes);

    return (
      <Switch>
        {Primary}
      </Switch>
    );
  }
}


MainComponent.propTypes = {
};

MainComponent.defaultProps = {
};


export default MainComponent;
