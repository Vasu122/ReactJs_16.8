
const changeAction = () =>{
  // return{
  //   type: 'CHANGE_NAME',
  //   payload : name
  // }
  return(dispatch) =>{
    return (dispatch) =>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          console.log("Action data is ",data);
        })
    }
  }
}

export default changeAction;
