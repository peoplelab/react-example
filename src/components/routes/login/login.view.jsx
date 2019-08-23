import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Box from '../../layouts/Box';
import LoginCard from '../../forms-custom/Card.view';
import InputCard from '../../forms-custom/InputCard.view';
import Gallery from '../../layouts/Gallery.view';
import Form from '../../forms/Form';
import TextInput from '../../forms/TextInput';
import PasswordInput from '../../forms/PasswordInput';
import Select from '../../forms/Select';
import Submit from '../../forms/Submit';
import Field from '../../forms/Field';
import LoginError from './Login.item.Error';

import { callLogin, callCultureGet, callLastLogin } from '../../../controllers/routes/login/login.controller';
import { SessionContext } from '../../../store/session.store';

import '../../../styles/routes/login.style.scss'; // apply Login style to this route


const required = ['username', 'password'];


class LoginRoute extends Component {
  static contextType = SessionContext;

	constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      culture: 'it-IT',
      data: null,
      usersList: [],
      options: [],
    };

    this.updateState = this.updateState.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount() {
    const fn = this.updateState;
    // const fn = () => {};

    callCultureGet({ fn });
    callLastLogin({ fn });
  }

  updateState(data) {
    this.setState(data);
  }

  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  setUsername(event) {
    const { data } = event;

    this.setState(data);
  }

  onLogin(data, event) {
    // const context = this.context;

    callLogin({
      data,
      // context
      fn: (data) => { alert(data); },
    });
  }

	render() {
    const [state] = this.context;

    const errorOnLogin = !(state.failure === null && state.error === null);

    const { username, password, culture, data, usersList, options } = this.state;

    const newOptions = options.map((value) => ({ value: value.code, message: value.description }));

    return (
      <section className="login">
        <Box className="login__dialog">
          <Form className="login__form" name="login-form">
            <p className="login__title">
              Inserisci i tuoi dati
            </p>
            <Box className="login__form-box">
              <Field className="login__field">
                <InputCard
                  className="login__text-input"
                  target={["username", "culture"]}
                  name="data"
                  data={data}
                  onClick={this.setUsername}
                >
                  <TextInput className="login__text-input" name="username" value={username} onChange={this.onChange} placeholder="Username" />
                </InputCard>
              </Field>
              <Field className="login__field">
                <PasswordInput
                  className="login__text-input" name="password" value={password} onChange={this.onChange} placeholder="Password"
                />
              </Field>
              <Field className="login__field">
                <Select
                  className="login__select-input" name="culture" value={culture} onChange={this.onChange} options={newOptions}
                />
              </Field>
              <Submit className="login__form-submit" required={required} value={this.state} onSubmit={this.onLogin} name="login-form">
                Login
              </Submit>
            </Box>
            <Gallery
              className="login__form-gallery"
              list={usersList}
            >
              <LoginCard
                target={["username", "culture"]}
                name="data"
                onClick={this.setUsername}
              />
            </Gallery>
          </Form>
        </Box>
        <LoginError show={errorOnLogin} />
      </section>
    );
	}
}


/**
 * Define component properties types
 */
LoginRoute.propTypes = {
};

/**
 * Define default value of component properties
 */
LoginRoute.defaultProps = {
};


export default LoginRoute;
