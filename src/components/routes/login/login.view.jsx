//----------------------------------------------------------------------------------------
// File: login.view.jsx
//
// Desc: Pagina per la gestione della login
// Path: /src/components/routes/login/login.view
//----------------------------------------------------------------------------------------


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

import '../../../styles/routes/login.style.scss'; // apply Login style to this route


// lista dei campi obbligari
const required = ['username', 'password'];

// stato iniziale della form
const initial = {
  username: '',
  password: '',
  culture: 'it-IT',
  data: null,
};


class LoginRoute extends Component {

	constructor(props) {
    super(props);

    // inizializzazione dello stato della pagina
    this.state = {
      ...initial,
      usersList: [],
      cultureList: [],
      errorOnLogin: false,
    };

    this.updateState = this.updateState.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  // a componente carico, viene richiesta la lista delle culture e degli ultimi accessi, quindi aggiornato lo stato corrente
  componentDidMount() {
    const dispatch = this.updateState;

    callCultureGet({ dispatch });
    callLastLogin({ dispatch });
  }

  // chimata per aggiornare lo stato corrente della pagina
  updateState(newState) {
    this.setState(newState);
  }

  // metodo per la gestione dell'evento onchange di un generico campo di input
  onChange(event) {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  // metodo per impostare un valore username predefinito, proveniente dalla lista degli ultimi accessi, all'interno della form
  setUsername(event) {
    const { data } = event;

    this.setState(data);
  }

  // esegue la richiesta di login
  onLogin(data, event) {
    const dispatch = this.updateState;

    callLogin({
      data,
      dispatch,
    });
  }

  // renderizzazione della pagina
	render() {
    const { username, password, culture, data, usersList, cultureList, errorOnLogin } = this.state;

    const newCultureList = cultureList.map((value) => ({ value: value.code, message: value.description }));

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
                  reset={initial}
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
                  className="login__select-input" name="culture" value={culture} onChange={this.onChange} options={newCultureList}
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
