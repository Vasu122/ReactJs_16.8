
const iState = {
  name : 'ramesh',
  wishes: ['Rum','Bear','Rc','Bp']
}

// const myStory = {
//   name :'rabindra singh',
//   age:32,
//   education :['High scholl','Intermediate','B.sc A IT','ADSE']
// }

const reducer = (state=iState,action) =>{
  console.log("action",action);
    if(action.type === 'CHANGE_NAME'){
      return{
        ...state,
        name : action.payload
      }
    }
  return state
}
export default reducer;
