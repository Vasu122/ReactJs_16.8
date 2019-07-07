import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import AboutUs from './aboutus/aboutus';
import Contact from './contact';
import JobPage from './job';
import {StateUse} from './stateUse';

import ParentChild from './parentChild';
import Parent from './parent/parent';
function App() {
  return (
    <div className="App">

      <Parent />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AboutUs name="bahadur singh" age="30"/>
        <Contact
              mobileNumber = "8448669151"
              emailId = "rabindrasingh758@gmail.com"
        />
        <JobPage
        jobList={numbers}/>
        <ParentChild name="parent to child">
          <p>Hi I am comming from Parent</p>
          <p> Hi Ada i have been doing work since 2 days on enterprise project. so i am very excited on this project work, so i have compled couple of bugs. but some issues has left right now. so i think i will try for completed work. {100 + 10} </p>
        </ParentChild>
        <StateUse age="30"></StateUse>
      </header>
    </div>

  );
}
const numbers = ["html5","Css3","javascript","Jquery"];

export default App;
