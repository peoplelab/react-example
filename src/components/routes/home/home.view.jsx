import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { callLogout } from '../../../controllers/routes/logout/logout.controller';
import Box    from '../../layouts/Box';
import Anchor from '../../layouts/Anchor';
import Button from '../../forms/Button';
import { SessionContext, types } from '../../../store/session.store';


class HomeRoute extends PureComponent {
  static contextType = SessionContext;

	constructor(props) {
		super(props);

		this.onLogout = this.onLogout.bind(this);
		this.onFailure = this.onFailure.bind(this);
		this.onSuccess = this.onSuccess.bind(this);
		this.onError = this.onError.bind(this);
  }

  onFailure(failure) {
  }

  onSuccess(success) {
    const [, dispatch] = this.context ;

    dispatch({
      type: types.SESSION_RESET,
      payload: success,
    });
  }

  onError(error) {
  }

	onLogout() {
    const [state] = this.context;
    const data = {
      accessToken: state.session.accessToken,
      sessionId: state.session.sessionId,
    };

		callLogout({
      data,
      onFailure: this.onFailure,
      onSuccess: this.onSuccess,
      onError: this.onError,
    });
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


HomeRoute.propTypes = {
};

HomeRoute.defaultProps = {
};


export default HomeRoute;
