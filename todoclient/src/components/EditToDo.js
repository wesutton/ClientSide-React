import React, { Fragment, useState } from 'react';
// import axios from 'axios';

const EditTodo = (todo) => {
    const [item, setItem] = useState(todo.item)

    //edit item function
    const updateItem = async e => {
        e.preventDefault();
        try{
        //    const body = {todo:{item:item, priority:"null"};
           const response = await fetch (`http://localhost:3000/toDo/update/${todo.id}`, {
               method:"PUT", 
               headers: {"Content-Type" : "application/json"},
               body: JSON.stringify({todo:{item:item, priority:"null"}})
           })
           console.log (response)
        } catch (err) {
            console.error(err.message)
        }
    };
    // console.log (todo)
    return <Fragment>
<button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target={`#id${todo.id}`}>
  Edit
</button>

<div className="modal fade" id={`id${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Edit To-Do Item</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body"><input type="text" className="form-control" value={item} onChange={e => setItem(e.target.value)}></input>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick = {e => updateItem(e)}>Save changes</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div></Fragment>
};

export default EditTodo;
