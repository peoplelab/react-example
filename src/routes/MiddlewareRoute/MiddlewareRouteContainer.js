import { connect } from 'react-redux';
import MiddlewareRoute from './MiddlewareRouteView';
import { withRouter } from 'react-router-dom';
import { calljQueryApi } from '../../store/actions/MiddlewareRoute';


const mapDispatchToProps = {
  calljQueryApi,
};

const mapStateToProps = state => ({
  response: state.MiddlewareRoute.response,
});


const MiddlewareRouteContainer = connect(mapStateToProps, mapDispatchToProps)(MiddlewareRoute);

export default withRouter(MiddlewareRouteContainer);
