 const reducer = (state=0,action)=>{
 if(action.type === 'deposite'){
    return ( state + action.payload)
 }
 else if(action.type === 'wihdraw'){
    return  (state - action.payload)
 }
 else{
    return state;
 }
}
export default reducer