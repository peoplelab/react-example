import { connect } from 'react-redux';
import { withRouter } from 'react-router';


const headers = state => ({
  Authorization: state.accessToken ? `Bearer ${state.accessToken}` : undefined,
  Session: state.sessionId,
});


const mapStateToProps = state => ({
  headers: headers(state),
});


export default Component => withRouter(connect(mapStateToProps)(Component));
