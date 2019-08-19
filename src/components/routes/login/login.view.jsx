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
import { SessionContext } from '../../../store/session.store';

import '../../../styles/routes/login.style.scss'; // apply Login style to this route


const required = ['username', 'password'];
const initial = {
  username: '',
  password: '',
  culture: 'it-IT',
};


class LoginRoute extends PureComponent {
  static contextType = SessionContext;

	constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);

    this.state = {
      errorOnLogin: false,
    };
  }

  onLogin(event) {
    const context = this.context;

    callLogin({
      data: event.target.value,
      context
    });
  }

	render() {
    const [state] = this.context;

    const { options } = this.props;

    const errorOnLogin = !(state.failure === null && state.error === null);

    return (
      <section className="login">
        <Box className="login__dialog">
          <h1 className="login__title">
            Login
          </h1>
          <Form
            name="login-form"
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
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
  options: [
    {
      message: 'it-IT',
      value: 'it-IT',
    }
  ]
};


export default LoginRoute;
