import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import Home from '../components/Home';

const mapStateToProps = ({ nav, auth }) => ({ nav, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
