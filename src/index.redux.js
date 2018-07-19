const ADD_NUM = 'INCREMENT'
const REMOVE_NUM = 'DECREMENT'

//reducer
export function counter(state = 0, action){
    switch (action.type) {
        case ADD_NUM :
            return state + 1;
        case REMOVE_NUM :
            return state - 1;
        default:
            return 10
    }
}
//action creator
export function addNum(){
    return { type:ADD_NUM }
}
export function removeNum(){
    return { type:REMOVE_NUM }
}
export function addNumAsync(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addNum())
        },2000)
    }
}