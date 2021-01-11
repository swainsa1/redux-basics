const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0,
};

//Lets create a reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "T_INC_CTR") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "T_ADD_CTR") {
    return {
      ...state,
      counter: state.counter + action.value,
    };
  } else {
    return state;
  }
};

//Store data

const store = createStore(rootReducer);
console.log("Initial State ::" + store.getState());

//Subscribe

store.subscribe(()=>{
    console.log('[Subscription]',store.getState());
});

 

//Dispatch
store.dispatch({ type: 'T_INC_CTR' });
store.dispatch({ type: 'T_ADD_CTR', value: 10 });
store.dispatch({ type: 'T_INC_CTR' });
store.dispatch({ type: 'T_ADD_CTR', value: 10 });
store.dispatch({ type: 'T_INC_CTR' });
store.dispatch({ type: 'T_ADD_CTR', value: 10 });
store.dispatch({ type: 'T_INC_CTR' });
store.dispatch({ type: 'T_ADD_CTR', value: 10 });
console.log(store.getState());
