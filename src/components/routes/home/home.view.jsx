//----------------------------------------------------------------------------------------
// File: home.view.jsx
//
// Desc: Pagina pubblica principale
// Path: /src/components/routes/home/home.view
//----------------------------------------------------------------------------------------


import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Box    from '../../layouts/Box';
import Anchor from '../../layouts/Anchor';
import Button from '../../layouts/Button';
import { callLogout } from '../../../controllers/routes/logout/logout.controller';

import '../../../styles/routes/home.style.scss';


class HomeRoute extends PureComponent {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
  }

  // chimata a logout
	onLogout() {
    // in assenza di parametri nella funzione del controller, è necessario passare sempre un oggetto vuoto
		callLogout({});
	}

  // renderizzazione della pagina
	render() {
    return (
      <Box className="home">
        <nav className="home__nav">
          <ul className="home__list">
            <li className="home__item">
              <Anchor path="/login">
                Vai a <b>Login</b>
              </Anchor>
            </li>
            <li className="home__item">
              <Anchor className="home__anchor" path="/tools">
                Vai a <b>Tools</b>
              </Anchor>
            </li>
            <li className="home__item">
              <Anchor className="home__anchor" path="/cultures">
                Vai a <b>Cultures</b>
              </Anchor>
            </li>
          </ul>
        </nav>
        <Box className="home__route">
          <h1 className="home__title">
            Home page
          </h1>
          <Box className="home__container">
            <Button
              className="home__button"
              onClick={this.onLogout}
              disabled={false}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
		);
	}
}


/**
 * Define component properties types
 */
HomeRoute.propTypes = {
};

/**
 * Define default value of component properties
 */
HomeRoute.defaultProps = {
};


export default HomeRoute;
