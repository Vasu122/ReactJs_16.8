
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './route.css';
import {connect } from 'react-redux';
import changeAction from '../actions/action';
function App(props) {
  return (
    <div>
      <h3> My Name is {props.myname} </h3>
      <Home myName={props} />
    <button type="button" onClick={() =>{props.changeName()}}> Change It </button>
    </div>
    // <Router>
    //   <div>
    //     <Header />
    //     <Route exact path="/" component={Home} props={props}/>
    //     <Route path="/about" component={About} />
    //     <Route path="/topics" component={Topics} />
    //   </div>
    // </Router>
  );
}

function Home(props) {
  console.log("props is",props)
  return(
    <div>
      <h1> Home page {props.myName.myname} </h1>

    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}
const mapStateToProps = (state) =>{
  console.log("All state is", state);
  return {
    myname : state.name,
    myarrayData : state.wishes
  }
}

// const mapStateToProps =(state) =>{
//    console.log("My self reducer is", state);
//   return{
//
//   }
// }

const mapDispatchToProps = (dispatch) =>{
  return{
    changeName : () =>{
      dispatch(changeAction())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
