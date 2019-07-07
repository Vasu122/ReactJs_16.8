import React,{Component} from 'react';

class Child2 extends Component{
   render(){
     return(
       <div>
        <hr />
          <p> Hi I am child 2 component data comming from paret {this.props.dataFromParent} and this data comming from child 1 {this.props.child1Data} </p>
        <hr />
       </div>
     )
   }
}
export default Child2;
