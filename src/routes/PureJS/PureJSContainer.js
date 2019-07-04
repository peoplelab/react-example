/* eslint-disable camelcase */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import PureJS from './PureJSView';


const responseSelector = createSelector(
  state => state.PureJS.response,
  response => JSON.stringify(response),
);


const mapDispatchToProps = {
};

const mapStateToProps = state => ({
  response: responseSelector(state),
});


const PureJSContainer = connect(mapStateToProps, mapDispatchToProps)(PureJS);

export default withRouter(PureJSContainer);
