import React from 'react';


let Contact = (props) =>{
  return(
    <div>
      <h1> Contact Us component create using functional components </h1>
      <p> There are two type component <br/>
        1) functional component <br/>
        11) class component
      </p>
      <p> Mobile number is : {props.mobileNumber} </p>
      <p> Email id  is : {props.emailId} </p>
    </div>
  )
}
export default Contact;
