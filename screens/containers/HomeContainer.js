import { connect } from 'react-redux';
import HomeWithNavigationState from '../navigators/HomeNavigator';

const mapStateToProps = ({ homeNav }) => ({ nav: homeNav });

export default connect(mapStateToProps)(HomeWithNavigationState);
