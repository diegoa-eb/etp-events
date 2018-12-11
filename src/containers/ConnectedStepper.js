import { connect } from 'react-redux';
import Stepper from '../components/Stepper';

import { increaseStepper, decreaseStepper, resetStepper } from '../actions'

const _mapStateToProps = (state) => ({
    counter: state.stepper,
});

const _mapDispatchToProps = {
    handleAddButton: increaseStepper,
    handleSubtractButton: decreaseStepper,
    handleResetButton: resetStepper,
};

export default connect(
    _mapStateToProps,
    _mapDispatchToProps,
)(Stepper);