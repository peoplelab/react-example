/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';
import Primary from '../../template/Primary';

import '../../style/routes/SagasRoute.scss';


class SagasRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Choice an api method call' };

    // this.onjQuery = this.onjQuery.bind(this);
    this.onAxios = this.onAxios.bind(this);
  }

  // onjQuery(event) {
  //   const { value } = event.target;
  //   const { calljQueryApi } = this.props;

  //   this.setState({ title: 'jQuery' });

  //   calljQueryApi(value);
  // }

  onAxios(event) {
    const { value } = event.target;
    const { callAxiosApiSagas } = this.props;

    this.setState({ title: 'Axios' });

    callAxiosApiSagas(value);
  }

  render() {
    const { response } = this.props;
    const { title } = this.state;

    return (
      <Primary>
        <h2 className="primary__route-title">
          Api with sagas
        </h2>
        <Box className="primary__route-section sagas">
          {/* <Buttons className="sagas__button" onClick={this.onjQuery}>
            test jQuery api
          </Buttons>
          <br /> */}
          <Buttons className="sagas__button" onClick={this.onAxios}>
            test Axios api
          </Buttons>
          <br />
          <br />
          <h3 className="sagas__title">
            {title}
          </h3>
          <p className="sagas__paragraph">
            {response}
          </p>
        </Box>
      </Primary>
    );
  }
}


SagasRouteComponent.propTypes = {
  response: PropTypes.string,
  // calljQueryApi: PropTypes.func.isRequired,
  callAxiosApiSagas: PropTypes.func.isRequired,
};

SagasRouteComponent.defaultProps = {
  response: '',
};


export default SagasRouteComponent;
