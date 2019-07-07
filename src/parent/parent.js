import React,{Component} from 'react';

import Child1 from './child-1';
import Child2 from './child-2';

class Parent extends Component{
   state ={
     message : '1',
     data : "Hello world"
   }
   callbackFunction = (childData) =>{
     this.setState({
       message: childData,
       data : childData
     })
   }
   render(){
     return(
      <div>
        <p> Hi I am parent component {this.state.message} </p>
        <hr />
        <Child1 parentCallback= {this.callbackFunction}  />

        <Child2 dataFromParent = {this.state.data} child1Data= {this.state.message} />
      </div>
     )
   }
}

export default Parent;
