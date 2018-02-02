import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterActions';
import DetailView from '../components/DetailView';

const mapStateToProps = ({ nav, counter, auth }) => ({ nav, counter, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { increment, decrement, reset };

export default connect(mapStateToProps, mapDispatchToProps)(DetailView);
