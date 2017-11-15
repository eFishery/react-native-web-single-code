import { connect } from 'react-redux';
import { increment, decrement, reset } from '../actions/counterActions';
import ScheduleViewer from '../components/ScheduleViewer';

const mapStateToProps = ({ counter }) => ({ counter });

const mapDispatchToProps = dispatch => ({
  increment: (lastVal, id) => dispatch(increment(lastVal, id)),
  decrement: (lastVal, id) => dispatch(decrement(lastVal, id)),
  reset: (lastVal, id) => dispatch(reset(lastVal, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleViewer);
