/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/layout/Box';
import Buttons from '../../components/forms/Button';
import Primary from '../../template/Primary';

import '../../style/routes/PureJS.scss';


class PureJSComponent extends Component {
  constructor(props) {
    super(props);

    this.state = { title: 'Choice an api method call' };

    this.onjQuery = this.onjQuery.bind(this);
    // this.onAxios = this.onAxios.bind(this);
  }

  onjQuery(event) {
    const { value } = event.target;
    const { calljQueryApiPureJS } = this.props;

    this.setState({ title: 'jQuery' });

    calljQueryApiPureJS(value);
  }

  // onAxios(event) {
  //   const { value } = event.target;
  //   const { callAxiosApi } = this.props;

  //   this.setState({ title: 'Axios' });

  //   callAxiosApi(value);
  // }

  render() {
    const { response } = this.props;
    const { title } = this.state;

    return (
      <Primary>
        <h2 className="primary__route-title">
          Api with pure JS
        </h2>
        <Box className="primary__route-section pure-js">
          <Buttons className="pure-js__button" onClick={this.onjQuery}>
            test jQuery api
          </Buttons>
          {/* <br />
          <Buttons className="pure-js__button" onClick={this.onAxios}>
            test Axios api
          </Buttons> */}
          <br />
          <br />
          <h3 className="pure-js__title">
            {title}
          </h3>
          <p className="pure-js__paragraph">
            {response}
          </p>
        </Box>
      </Primary>
    );
  }
}


PureJSComponent.propTypes = {
  response: PropTypes.string,
  calljQueryApiPureJS: PropTypes.func.isRequired,
  // callAxiosApi: PropTypes.func.isRequired,
};

PureJSComponent.defaultProps = {
  response: '',
};


export default PureJSComponent;
