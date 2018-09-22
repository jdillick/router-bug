import { connect } from 'react-redux';
import IncrementButton from './IncrementButton';

export default connect(_=>_, dispatch => ({
    onClick: () => dispatch({type: 'INCREMENT'}),
}))(IncrementButton);
