import React, {Fragment, useState} from "react";

const InputToDo = () => {
    const [item, setItem] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {item};
            const response = await fetch('http://localhost:3000/toDo/add', {
                method: "POST", 
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
                
            });
            return response
            // window.location="/";
        } catch(err){
            console.error(err.message)

        }
    }
    return (
    <Fragment>
        <h1 className='text-center mt-5'>Todo List
        </h1>
    <form className='d-flex mt-5' onSubmit={onSubmitForm}>
        <input type= 'text' className = "form-control" value ={item} onChange={e => setItem(e.target.value)}/>
        <button className ='btn btn-success'>Add</button>
    </form>
    </Fragment>
    )
}

export default InputToDo;
