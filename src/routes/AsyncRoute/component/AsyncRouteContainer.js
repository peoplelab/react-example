import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import AsyncRoute from './AsyncRouteView';
import { getGeolocation } from '../modules/actions';


const coord = createSelector(
  state => state.AsyncRoute.latitude,
  state => state.AsyncRoute.longitude,
  (lat, lon) => ({ lat, lon }),
);


const mapDispatchToProps = {
  getGeolocation,
};

const mapStateToProps = state => ({
  coord: coord(state),
});

const AsyncRouteContainer = connect(mapStateToProps, mapDispatchToProps)(AsyncRoute);

export default withRouter(AsyncRouteContainer);
