import React, { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";





//components

import NewAgenda from "./components/NewAgenda";

function App() {
  return (
    <Fragment>
      <div className="container">
        <NewAgenda />
      </div>
      
      
    </Fragment>
  );
}

export default App;


