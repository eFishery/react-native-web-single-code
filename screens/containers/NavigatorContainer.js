import { connect } from 'react-redux';
import AppWithNavigationState from '../navigators/AppNavigator';

const mapStateToProps = state => ({ nav: state.nav });

export default connect(mapStateToProps)(AppWithNavigationState);
