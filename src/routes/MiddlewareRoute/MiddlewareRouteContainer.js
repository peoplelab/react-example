import { connect } from 'react-redux';
import MiddlewareRoute from './MiddlewareRouteView';
import { withRouter } from 'react-router-dom';
import {
  calljQueryApi,
  callAxiosApi_promise,
  callAxiosApi_async,
  callAxiosApi_saga
} from '../../store/actions/MiddlewareRoute';


const mapDispatchToProps = {
  calljQueryApi,
  callAxiosApi_promise,
  callAxiosApi_async,
  callAxiosApi_saga,
};

const mapStateToProps = state => ({
  response: state.MiddlewareRoute.response,
});


const MiddlewareRouteContainer = connect(mapStateToProps, mapDispatchToProps)(MiddlewareRoute);

export default withRouter(MiddlewareRouteContainer);
