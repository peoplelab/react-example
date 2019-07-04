import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AsyncRoute from './AsyncRouteView';
// import {  } from '../modules/actions';


const mapDispatchToProps = {
};

const mapStateToProps = () => ({
});


const AsyncRouteContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncRoute);

export default withRouter(AsyncRouteContainer);
