import './App.css';
import React, { Fragment } from 'react';

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
