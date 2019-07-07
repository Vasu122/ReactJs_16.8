import React,{Component} from 'react';

// state use without constructor
export  class StateUse extends Component{
   state ={
     name : 'Rabindra singh',
     education : 'B.Sc A(IT)',
     age : this.props.age
   }
  render(){
    return(
      <div>
          <hr/>
          <h1> There are two types of using state First is with constructor and second is without constructor</h1>
          <p>without constructor</p>
          <p>  {this.state.name} </p>
          <p>  {this.state.education} </p>
          <p> {this.state.age} </p>
      </div>
    )
  }
}
// export default StateUse;


  // state use with constructor
  //
  // export class StateUse extends Component {
  //   constructor(){
  //     super(props)
  //     this.state ={
  //       name : 'Rabindra Singh',
  //       age : this.props.age
  //     }
  //   }
  //   render(){
  //     return(
  //       <div>
  //         <hr />
  //         <h1> I am  state use with constructor and props </h1>
  //         <p> {this.state.name} </p>
  //         <p>  {this.state.age }  </p>
  //       </div>
  //     )
  //   }
  // }
