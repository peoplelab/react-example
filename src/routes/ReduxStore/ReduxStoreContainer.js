import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReduxStore from './ReduxStoreView';
import {
  changeColor,
  updateValue,
  setVisibility,
} from '../../store/actions/ReduxStore';


const mapDispatchToProps = {
  changeColor,
  updateValue,
  setVisibility,
};

const mapStateToProps = state => ({
  color: state.ReduxStore.color,
  value: state.ReduxStore.value,
  visible: state.ReduxStore.visible,
});


const ReduxStoreContainer = connect(mapStateToProps, mapDispatchToProps)(ReduxStore);

export default withRouter(ReduxStoreContainer);
