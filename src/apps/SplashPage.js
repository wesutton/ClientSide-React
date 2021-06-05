import React, { Fragment }  from 'react';
import InputToDo from '../../todoclient/src/components/InputToDo';
import ListTodos from '../../todoclient/src/components/ListToDo'

const SplashPage = (props) => {
    return(
        <Fragment>
        <div>Agenda goes here</div>
        <div className="container">
            <InputToDo/>
            <ListTodos/>
        </div>
        </Fragment>
    )
}

export default SplashPage;