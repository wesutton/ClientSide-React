import React, { Fragment }  from 'react';
import Header from '../components/user/Header'
import DayHeader from '../components/agenda/DayHeader'
import Today from '../components/agenda/DayPlanner'
import ListTodos from '../../todoclient/src/components/ListToDo'
import InputToDo from '../../todoclient/src/components/InputToDo';
import AllAgenda from '../components/agenda/AllAgenda'


const SplashPage = (props) => {
    return(
        <>
            <div className='splashHeader'>
                <Header />
                <DayHeader />
            </div>
            <div className='splashBody'>
                <Today />
                <ListTodos />
                <InputToDo />
            </div>
            <div className='lists'>
                <AllAgenda />

            </div>
        </>
    )
}

export default SplashPage;