import * as actionTypes from '../actions';

const initialState ={
    counter:0
};

const reducer = (state = initialState ,action) => {
    switch(action.type){
        case actionTypes.ADD:
            return {
                ...state,counter:state.counter+action.val
            }
        case actionTypes.DECREMENT:
            return {
                ...state,counter:state.counter-1
            }
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter:state.counter+1 
                ///const newState = Object.assign({}, state);
            ///newState.counter = state.counter + 1;
            ///return newState;
            }
        case actionTypes.SUBTRACT:
            return {
            ...state,
            counter:state.counter -action.val
            }


    }
    return state;



};

export default reducer;
