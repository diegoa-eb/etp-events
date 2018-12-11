import { connect } from 'react-redux';
import  EventList  from '../components/EventList';

const _mapStateToProps = (state) => ({
    events: state.events,
});

const _mapDispatchToProps = {
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(EventList);