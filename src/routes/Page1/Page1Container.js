import { connect } from 'react-redux';
import Page1View from './Page1View';
import { withRouter } from 'react-router-dom';


const mapStateToProps = state => ({
    payload_a: state.Page1View.payload_a,
    payload_b: state.Page1View.payload_b,
    payload_fetch: state.Page1View.payload_fetch,
});

const Page1Container = connect(mapStateToProps)(Page1View);

export default withRouter(Page1Container);
