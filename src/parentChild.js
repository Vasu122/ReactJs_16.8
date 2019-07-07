import React,{Component} from 'react';

// // // functional Component
// let ParentChild = (props) =>{
//   function eventClivk(){
//     console.log("Hi im click", props.name);
//   }
//   return(
//     <div>
//       <h1> Hi I am belong to parent to child </h1>
//       <div className="children"> {props.children} </div>
//       <button type="button" onClick={eventClivk}> Click ME </button>
//     </div>
//   )
// }
class ParentChild extends Component {
  constructor(props){
    super(props);
    // this.eventClick = this.eventClick.bind(this);
    this.state ={
      name1:'bahadur singh',
      name : this.props.name
    }
  }
  eventClick = (value,value1) =>{

    // this.setState({
    //   name1 : "Rabindra singh",
    //   name : 'Child cooming from parent'
    // });
    // this.setState((state,props) =>{
    //     console.log("state is ",state);
    //     console.log("props is ",props);
    // })
    console.log("Hi im click 123", value,value1);
  }
  render(){
    return(
      <div>
        <h1> Hi I am belong to parent to child </h1>
        <div className="children">
          {this.props.children}
        </div>
        <p> { this.state.name} </p>
        <p> {this.state.name1} </p>
        <button onClick={this.eventClick.bind(this,'rabindra',100)}> Click ME 123 </button>
      </div>
    )
  }
}

export default ParentChild;
