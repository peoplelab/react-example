import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import LoginCard from '../../forms-custom/Card.view';
import InputCard from '../../forms-custom/InputCard.view';
import Gallery from '../../layouts/Gallery.view';
import Form from '../../forms/Form';
import PasswordInput from '../../forms/PasswordInput';
import Select from '../../forms/Select';
import Submit from '../../forms/Submit';
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

    const { options, usersList } = this.props;

    const errorOnLogin = !(state.failure === null && state.error === null);

    return (
      <section className="login">
        <Box className="login__dialog">
          <Form className="login__form" name="login-form" initial={initial}>
            <p className="login__title">
              Inserisci i tuoi dati
            </p>
            <Box className="login__form-box">
              <Field className="login__field">
                <InputCard
                  className="login__text-input"
                  name="username"
                  group="data"
                  placeholder="Username"
                />
              </Field>
              <Field className="login__field">
                <PasswordInput
                  className="login__text-input"
                  name="password"
                  placeholder="Password"
                />
              </Field>
              <Field className="login__field">
                <Select
                  className="login__select-input"
                  name="culture"
                  options={options}
                />
              </Field>
              <Submit className="login__form-submit" required={required} onSubmit={this.onLogin} name="login-form">
                Login
              </Submit>
            </Box>
            <Gallery
              className="login__form-gallery"
              list={usersList}
            >
              <LoginCard name="username" group="data" />
            </Gallery>
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
  usersList: PropTypes.arrayOf(PropTypes.object),
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
  usersList: [
    {
      lastAccess: '9:35 05/06/2019',
      username: 'Stephan Kuttingen',
      gender: 'male',
      role: 'user',
    },
    {
      lastAccess: '10:40 04/06/2019',
      username: 'Alfred Marakakhov',
      gender: 'male',
      role: 'super',
    },
    {
      lastAccess: '9:35 05/06/2019',
      username: 'Stephan Kuttingen',
      gender: 'female',
      role: 'user',
    },
    {
      lastAccess: '10:40 04/06/2019',
      username: 'Alfred Marakakhov',
      gender: 'female',
      role: 'super',
    },
    {
      lastAccess: '9:35 05/06/2019',
      username: 'Stephan Kuttingen',
      gender: 'male',
      role: 'user',
    },
    {
      lastAccess: '10:40 04/06/2019',
      username: 'Alfred Marakakhov',
      gender: 'male',
      role: 'super',
    },
    {
      lastAccess: '9:35 05/06/2019',
      username: 'Stephan Kuttingen',
      gender: 'female',
      role: 'user',
    },
    {
      lastAccess: '10:40 04/06/2019',
      username: 'Alfred Marakakhov',
      gender: 'female',
      role: 'super',
    },
    {
      lastAccess: '8:21 04/06/2019',
      username: 'Maurizia Gambelli',
      gender: 'female',
      role: 'admin',
    }
  ],
  options: [
    {
      message: 'it-IT',
      value: 'it-IT',
    }
  ]
};


export default LoginRoute;
