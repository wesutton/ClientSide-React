import React from 'react';
import Header from './components/Header';
import Today from './components/DayPlanner'
import New from './components/NewAgenda'
import All from './components/AllAgenda'



function App() {
  return (
        <div>
          <Header />
          <Today />
          <New />
          <All />

        </div>
          
    
    );
  };

export default App
