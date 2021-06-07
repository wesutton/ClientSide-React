import React, { Fragment }  from 'react';
// import Header from '../components/user/Header'
import DayHeader from '../components/agenda/DayHeader'
import Today from '../components/agenda/DayPlanner'
import ListTodos from '../components/todo/ListToDo';
import InputToDo from '../components/todo/InputToDo';
import AllAgenda from '../components/agenda/AllAgenda'
import New from '../components/agenda/NewAgenda'


const SplashPage = (props) => {
    return(
        <>
            <div className='splashHeader'>
                <DayHeader />
            </div>
            <div className='splashBody'>
                <Today />
                <InputToDo />
                <ListTodos />   
            </div>
            <div className='lists'>
                <AllAgenda />
                <New />

            </div>
        </>
    )
}

export default SplashPage;