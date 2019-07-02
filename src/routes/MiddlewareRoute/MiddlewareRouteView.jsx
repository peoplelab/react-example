import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';


class MiddlewareRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    const { value } = event.target;
    const { calljQueryApi } = this.props;

    calljQueryApi(value);
  }

  render() {
    const { response } = this.props;

    return (
      <Box className="middleware-route">
        <Buttons className="middleware-route__button" onClick={this.onClick} >
          test jQuery api
        </Buttons>
        <p className="middleware-route__paragraph" >
          {response}
        </p>
      </Box>
    );
  }
}


MiddlewareRouteComponent.propTypes = {
  response: PropTypes.string,
  calljQueryApi: PropTypes.func.isRequired,
};

MiddlewareRouteComponent.defaultProps = {
  response: '',
};


export default MiddlewareRouteComponent;
