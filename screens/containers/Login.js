import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import Login from '../components/Login';

const mapStateToProps = ({ auth }) => ({ isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
