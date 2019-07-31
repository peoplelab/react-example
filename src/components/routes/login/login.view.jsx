import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../layouts/Box/Box.index';
import TextInput from '../../forms/TextInput';
import PasswordInput from '../../forms/PasswordInput';
import Button from '../../forms/Button';
import Select from '../../forms/Select';
import Field from '../../forms/Field';
import LoginError from './Login.item.Error';

import { callLogin, setSession, resetSession } from './login.controller';

import './Login.style.scss'; // apply Login style to this route


class LoginRoute extends PureComponent {
	constructor(props) {
    super(props);

    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);

    this.state = {
      errorOnLogin: false,
      username: '',
      password: '',
      culture: 'it-IT',
    };
  }

  onSuccess(success) {
    this.setState({ errorOnLogin: false });
    setSession(success);
    console.log(success);
  }

  onFailure(failure) {
    this.setState({ errorOnLogin: true });
    resetSession();
    console.log(failure);
  }

  onChange(event) {
    const {
      name,
      value,
    } = event.target;

    this.setState({ [name]: value });
  }

  onLogin() {
    callLogin({
      data: this.state,
      sucess: this.onSuccess,
      failure: this.onFailure,
    });
  }

	render() {
    const { options } = this.props;

    const {
      errorOnLogin, culture, username, password,
    } = this.state;

    const disabled = !username || !password;

    return (
      <section className="login">
        <Box className="login__dialog">
          <form className="login__form">
            <h1 className="login__title">
              Login
            </h1>
            <Box className="login__group">
              <Field label="Username">
                <TextInput
                  className="login__text-input"
                  name="username"
                  value={username}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Password">
                <PasswordInput
                  className="login__text-input"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                />
              </Field>
              <Field label="Culture">
                <Select
                  className="login__select-input"
                  name="culture"
                  value={culture}
                  options={options}
                  onChange={this.onChange}
                />
              </Field>
            </Box>
            <Box className="login__group">
              <Box className="login__box">
                <Button
                  className="login__button"
                  onClick={this.onLogin}
                  disabled={disabled}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </form>
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
