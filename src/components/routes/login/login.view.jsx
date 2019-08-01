import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import Form from '../../forms/Form';
import TextInput from '../../forms/TextInput';
import PasswordInput from '../../forms/PasswordInput';
import Select from '../../forms/Select';
import Field from '../../forms/Field';
import LoginError from './Login.item.Error';

import { callLogin } from '../../../controllers/routes/login/login.controller';
import { SessionContext, types } from '../../../store/session';

import '../../../styles/routes/login.style.scss'; // apply Login style to this route


const required = ['username', 'password'];
const initial = { culture: 'it-IT' };


class LoginRoute extends PureComponent {
  static contextType = SessionContext;

	constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onError = this.onError.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    this.state = {
      errorOnLogin: false,
    };
  }

  onFailure(failure) {
    this.setState({ errorOnLogin: true });
  }

  onSuccess(success) {
    const [, dispatch] = this.context ;

    dispatch({
      type: types.SET_SESSION,
      payload: success,
    });

    this.setState({ errorOnLogin: false });
  }

  onError(error) {
    const [, dispatch] = this.context ;

    dispatch({
      type: types.SET_SESSION,
      payload: error,
    });

    this.setState({ errorOnLogin: true });
  }

  onChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.setState({ [name]: value });
  }

  onLogin(event) {
    callLogin({
      data : this.state,
      onSuccess: this.onSuccess,
      onFailure: this.onFailure,
      onError: this.onError,
    });
  }

	render() {
    const { options } = this.props;

    const {
      errorOnLogin,
    } = this.state;

    return (
      <section className="login">
        <Box className="login__dialog">
          <h1 className="login__title">
            Login
          </h1>
          <Form
            className="login__form"
            label="Login"
            initial={initial}
            required={required}
            onSubmit={this.onLogin}
          >
            <Box className="login__group">
              <Field label="Username">
                <TextInput
                  className="login__text-input"
                  name="username"
                />
              </Field>
              <Field label="Password">
                <PasswordInput
                  className="login__text-input"
                  name="password"
                />
              </Field>
              <Field label="Culture">
                <Select
                  className="login__select-input"
                  name="culture"
                  options={options}
                />
              </Field>
            </Box>
          </Form>
        </Box>
        <LoginError show={errorOnLogin} />
      </section>
    );
	}
}

/**
 * Define object keys id and relative value types
 */
const shapeOptions = {
  deafult: PropTypes.bool,
  message: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};


/**
 * Define component properties types
 */
LoginRoute.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape(shapeOptions)),
  errorOnLogin: PropTypes.bool,
  // onLogin : PropTypes.func.isRequired,
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
  errorOnLogin: false,
  options: [
    {
      message: 'it-IT',
      value: 'it-IT',
    }
  ]
};


export default LoginRoute;
