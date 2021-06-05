import React, { Fragment, useEffect, useState } from "react";
import axios from "axios"
import EditTodo from './EditToDo'

const ListTodos = () => {

    const [data, setData] = useState([]);
    const deleteItem = async (id) => {
        try {
            const deleteItem = await axios.delete(`http://localhost:3000/toDo/delete/${id}`, {
                method: "DELETE"
            });
            console.log(deleteItem)
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect (() => {
        getData();
    }, []);

    const getData = async () => {
        try {

            const response = await axios.get('http://localhost:3000/toDo/list')
            // const jsonData = await response.json();

            setData(response.data.toDo);

            console.log(response);

        } catch (err) {

            console.error(err.message);

        }
    };

    
    console.log(data);

    return <Fragment>
        {" "}
        <table className="table mt-5 text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      {/* <th scope="col">Priority</th> */}
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {/*  <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>*/}

    {data.map(todo => (
        <tr key = {todo.id}>
            <td>{todo.id}</td>
            <td>{todo.item}</td>
            {/* <td>{todo.priority}</td> */}
            <td>
                {/* <button className="btn"> */}
                <EditTodo todo = {todo}/>
                {/* </button> */}
                </td>
            <td><button className="btn btn-outline-danger" onClick={() => deleteItem(todo.id)}>Delete</button></td>
        </tr>
    ))}
   
  
  </tbody>
</table>
        </Fragment>;
}

export default ListTodos;