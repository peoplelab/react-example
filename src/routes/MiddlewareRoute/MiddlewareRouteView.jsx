/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';
import Primary from '../../template/Primary';

import '../../style/routes/MiddlewareRoute.scss';


class MiddlewareRouteComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Choice an api method call' };

    this.onClick_jQuery = this.onClick_jQuery.bind(this);
    this.onClick_jQuerySaga = this.onClick_jQuerySaga.bind(this);
    this.onClick_AxiosPromise = this.onClick_AxiosPromise.bind(this);
    this.onClick_AxiosAsync = this.onClick_AxiosAsync.bind(this);
    this.onClick_AxiosSaga = this.onClick_AxiosSaga.bind(this);
  }

  onClick_jQuery(event) {
    const { value } = event.target;
    const { calljQueryApi } = this.props;

    this.setState({ title: 'jQuery' });

    calljQueryApi(value);
  }

  onClick_jQuerySaga(event) {
    const { value } = event.target;
    const { calljQueryApi_saga } = this.props;

    this.setState({ title: 'jQuery Saga' });

    calljQueryApi_saga(value);
  }

  onClick_AxiosPromise(event) {
    const { value } = event.target;
    const { callAxiosApi_promise } = this.props;

    this.setState({ title: 'Axios Promise' });

    callAxiosApi_promise(value);
  }

  onClick_AxiosAsync(event) {
    const { value } = event.target;
    const { callAxiosApi_async } = this.props;

    this.setState({ title: 'Axios Async' });

    callAxiosApi_async(value);
  }

  onClick_AxiosSaga(event) {
    const { value } = event.target;
    const { callAxiosApi_saga } = this.props;

    this.setState({ title: 'Axios Saga' });

    callAxiosApi_saga(value);
  }

  render() {
    const { response } = this.props;
    const { title } = this.state;

    return (
      <Primary>
        <h2 className="primary__route-title">
          Api with Middleware
        </h2>
        <Box className="primary__route-section middleware-route">
          <Buttons className="middleware-route__button" onClick={this.onClick_jQuery}>
            test jQuery api
          </Buttons>
          <br />
          <Buttons className="middleware-route__button" onClick={this.onClick_jQuerySaga}>
            test jQuery Saga api
          </Buttons>
          <br />
          <Buttons className="middleware-route__button" onClick={this.onClick_AxiosPromise}>
            test Axios Promise api
          </Buttons>
          <br />
          <Buttons className="middleware-route__button" onClick={this.onClick_AxiosAsync}>
            test Axios Async api
          </Buttons>
          <br />
          <Buttons className="middleware-route__button" onClick={this.onClick_AxiosSaga}>
            test Axios Saga api
          </Buttons>
          <br />
          <br />
          <h3 className="middleware-route__title">
            {title}
          </h3>
          <p className="middleware-route__paragraph">
            {response}
          </p>
        </Box>
      </Primary>
    );
  }
}


MiddlewareRouteComponent.propTypes = {
  response: PropTypes.string,
  calljQueryApi: PropTypes.func.isRequired,
  calljQueryApi_saga: PropTypes.func.isRequired,
  callAxiosApi_promise: PropTypes.func.isRequired,
  callAxiosApi_async: PropTypes.func.isRequired,
  callAxiosApi_saga: PropTypes.func.isRequired,
};

MiddlewareRouteComponent.defaultProps = {
  response: '',
};


export default MiddlewareRouteComponent;
