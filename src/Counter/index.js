import { connect } from 'react-redux';
import Counter from './Counter';

export default connect(state => ({ count: state.count }))(Counter);
