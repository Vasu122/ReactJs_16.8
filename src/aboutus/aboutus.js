import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './aboutus.css';
import AboutChild from './aboutChild';

class AboutUs extends Component {
  render(){
    return(
      <div>
        <br />
        <hr />
        <AboutChild />
      <h1>
        Hi I am Rabindra Singh and nick name is {this.props.name}
        and y age is <span> {this.props.age} </span>
       </h1>
          <InnerAbout />
          <InnerAbout1 />
          <InnerAbout />
          <InnerAbout1 />
       </div>
    )
  }
}

class InnerAbout extends Component{
  render(){
    return(
      <p>I have completed Bsc A It From sikkim manipal university from Aptechc center</p>
    )
  }
}
class InnerAbout1 extends Component{
  render(){
    return(
        <div className="first-row">
          <img src={require('../images/ch.jpg')} />
        </div>
    )
  }
}
export default AboutUs;
