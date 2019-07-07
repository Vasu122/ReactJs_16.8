import React,{Component} from 'react';

import ContextChild1 from './context-child-1';
export const MyContext  = React.createContext();

class ContextApiParents extends Component {
  state = {
    name : "context Api use by rabindra",
    createddate : '8 June 2019',
    value :10
  }
  handleClick = () =>{
    this.setState({
      value : this.state.value +1
    })
  }
  render(){
    const contextvalue = {
      data: this.state,
      handleClickBtn : this.handleClick
    }
    return(
      <div>
        <h1> Context Api parent component </h1>
        <MyContext.Provider value={contextvalue}> 
          <ContextChild1 />
        </MyContext.Provider>
      </div>
    )
  }
}
export default ContextApiParents;
