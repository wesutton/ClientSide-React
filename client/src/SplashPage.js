import React from 'react';
import InputToDo from './components/todo/InputToDo'
import ListTodos from './components/todo/ListToDo'
import DayHeader from './components/agenda/DayHeader'
import Today from './components/agenda/DayPlanner'
import New from './components/agenda/NewAgenda'
import All from './components/agenda/AllAgenda'
import Header from '../src/components/user/Header'
import Footer from '../src/components/user/Footer'


const SplashPage = (props) => {
    return(
        <>
            <Header />
            <DayHeader />

        <div className='todo'>
            <InputToDo/>
            <ListTodos/>
        </div>
       
       <div className='agenda'>
            <Today />
            <New />
            <All />
       </div>
       <Footer />

        </>
    )
}

export default SplashPage;