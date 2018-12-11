import React from 'react';
import PropTypes from 'prop-types';
import Button from 'eventbrite_design_system/button/Button';
import Icon from 'eventbrite_design_system/icon/Icon';

export default class Stepper extends React.Component {

    static propTypes = {
        counter: PropTypes.number.isRequired,
        handleAddButton: PropTypes.func.isRequired,
        handleSubtractButton: PropTypes.func.isRequired,
        handleResetButton: PropTypes.func.isRequired,
    }
    render() {
        return (
            <div className="eds-l-pad-all-5">
                <h1 className="eds-l-mar-vert-3 eds-align--center-horizontal">Counter: {this.props.counter}</h1>
                <div className="eds-g-cell eds-g-cell-12-12 eds-l-mar-vert-3">
                    <Button size="block" style="fill" onClick={this.props.handleAddButton}>
                        <Icon type="plus-chunky" />
                        Add
                    </Button>
                </div>
                <div className="eds-g-cell eds-g-cell-12-12 eds-l-mar-vert-3">
                    <Button size="block" onClick={this.props.handleSubtractButton}>
                        <Icon type="minus-chunky" />
                        Subtract
                    </Button>
                </div>
                <div className="eds-g-cell eds-g-cell-12-12 eds-l-mar-vert-3">
                    <Button size="block" onClick={this.props.handleResetButton}>
                        <Icon type="refresh-chunky" />
                        Reset
                    </Button>
                </div>
            </div>
        );
    }
}