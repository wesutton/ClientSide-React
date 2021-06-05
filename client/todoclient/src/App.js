import './App.css';
import React, { Fragment } from 'react';

// import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

// components

import InputToDo from './components/InputToDo';
import ListTodos from './components/ListToDo';

function App() {
  return (
   <Fragment>
     <div className="container">
       <InputToDo />
       <ListTodos />
     </div>
   </Fragment>
  );
}

export default App;
