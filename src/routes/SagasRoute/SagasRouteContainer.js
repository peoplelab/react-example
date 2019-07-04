/* eslint-disable camelcase */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import SagasRoute from './SagasRouteView';
import {
  callAxiosApiSagas,
} from '../../store/actions/SagasRoute';


const responseSelector = createSelector(
  state => state.SagasRoute.response,
  response => JSON.stringify(response),
);


const mapDispatchToProps = {
  callAxiosApiSagas,
};

const mapStateToProps = state => ({
  response: responseSelector(state),
});


const SagasRouteContainer = connect(mapStateToProps, mapDispatchToProps)(SagasRoute);

export default withRouter(SagasRouteContainer);
