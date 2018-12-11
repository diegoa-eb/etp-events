export const increaseStepper = () => (dispatch) => {
    dispatch({
        type: 'INCREASE_COUNTER',
    })
}

export const decreaseStepper = () => (dispatch) => {
    dispatch({
        type: 'DECREASE_COUNTER',
    })
}

export const resetStepper = () => (dispatch) => {
    dispatch({
        type: 'RESET_COUNTER',
    })
}