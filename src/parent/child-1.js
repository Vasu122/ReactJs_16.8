import React,{Component} from 'react';

class Child1 extends Component{
  sendDataToParent = () =>{
    let name ="hey Vasudev ,How's it going  using dynmic"
    this.props.parentCallback(name);
  }
  checkevent = () => {
    console.log("Hi i am click");
  }
   render(){
     return(
       <div>
        <hr />
          <p> Hi I amchild 1 component </p>
          <button type="button" onClick={this.sendDataToParent}>
              Send Data
          </button>
        <hr />
       </div>
     )
   }
}
export default Child1;
