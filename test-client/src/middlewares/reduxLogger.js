const reduxLogger = store => next => action =>{
    const prevState = store.getState().counter;
    next(action);
    const currentState = store.getState().counter;
    console.log(prevState, currentState)
}

export default reduxLogger