import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import Box    from '../../layouts/Box';
import Anchor from '../../layouts/Anchor';
import Button from '../../layouts/Button';
import { callLogout } from '../../../controllers/routes/logout/logout.controller';


class HomeRoute extends PureComponent {
	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
  }

	onLogout() {
		callLogout({});
	}

	render() {
    return (
			<div>
			<h1 style={{textAlign: 'center', color: '#900'}} >
				Home page
			</h1>
			<br/>
			<br/>
			<br/>
			<Box style={{textAlign: 'center', margin: '20px auto 100px'}} >

				<Button
					className="login__button"
					onClick={this.onLogout}
					disabled={false}
					style={{padding: '10px 30px'}}
				>
					Logout
				</Button>
			</Box>


				<Anchor path="/login"> Vai a <b>Login</b></Anchor>
				<Anchor path="/tools"> Vai a <b>Tools</b></Anchor>
				<Anchor path="/cultures"> Vai a <b>Cultures</b></Anchor>

			</div>
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
