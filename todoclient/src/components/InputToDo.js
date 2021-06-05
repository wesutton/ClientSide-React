import React, {Fragment, useState} from "react";

const InputToDo = () => {
    const [item, setItem] = useState("");
    // const onSubmitForm = async e => { e.preventDefault();
    const handleSubmit=(e)=>
    {e.preventDefault();
        fetch('http://localhost:3000/toDo/add',{
                method: "POST",
                body: JSON.stringify({toDo:{item:item, priority:"none"}}),
                headers: new Headers({
                "Content-Type":"application/json"})
            }) .then((res) => res.json())
               .then((logData) => {
                   console.log(logData);
                   setItem('');
               })
    }
    return (
    <Fragment>
        <h1 className='text-center mt-5'>Todo List
        </h1>
    <form className='d-flex mt-5' onSubmit={ handleSubmit }>
        <input type= 'text' className = "form-control" value ={item} onChange={(e) => setItem(e.target.value)}/>
        <button className ='btn btn-success'>Add</button>
    </form>
    </Fragment>
    )
}
export default InputToDo;

// import axios from "axios";
// import React, {Fragment, useState} from "react";

// const InputToDo = () => {
//     const [description, setDescription] = useState("");

//     const onSubmitForm = async e => {
//         e.preventDefault();
//         try {
//             const item = {description};
//             const response = await axios.post('http://localhost:3000/toDo/add', {
//                 method: "POST", 
//                 body: JSON.stringify({toDo: {item: item}}),
//                 headers: new Headers({ "Content-Type": "application/json"})
                
//             });
            
//             return response
//             // window.location="/";
//         } catch(err){
//             console.error(err.message)

//         }
//     }
//     return (
//     <Fragment>
//         <h1 className='text-center mt-5'>Todo List
//         </h1>
//     <form className='d-flex mt-5' onSubmit={onSubmitForm}>
//         <input type= 'text' className = "form-control" value ={description} onChange={e => setDescription(e.target.value)}/>
//         <button className ='btn btn-success'>Add</button>
//     </form>
//     </Fragment>
//     )
// }

// export default InputToDo;
