import React from 'react';
import Header from './components/Header';
import New from './components/New'
import Today from './components/DayPlanner';
import Update from './components/Update'
import All from './components/All'
import 'react-table/react-table.css'


const App = () => {
    return (
        <>
            <Header />
                 
            <Today />
  
            <New />

            <Update />

            <All />
        
        </>
    )
}

export default App