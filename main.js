//initialize state
const initialCounter={counter:0};

//create action creator
const incrementHandler=()=>{
    return {
        type:'increment',
    }
}

const decrementHandler=()=>{
    return {
        type:'decrement',
    }
}

//reducer
const incrementDecrementReducer=(state=initialCounter,action)=>{
    if(action.type==='increment'){
        return {
            ...state,
            counter:state.counter+1,
        };    
    }
    if(action.type==='decrement'){
        return {
            ...state,
            counter:state.counter-1,
        };
    }
    return state;
}

//store
const store=Redux.createStore(incrementDecrementReducer);
function render(){
    const state=store.getState();
    document.getElementById('counterValue').innerHTML=state.counter;
    console.log(state);
}
store.subscribe(render); //Adds a change listener. It will be called any time an action is dispatched



document.getElementById('increment').addEventListener('click',function(){
    store.dispatch(incrementHandler());
});

document.getElementById('decrement').addEventListener('click',function(){
    store.dispatch(decrementHandler());
});
