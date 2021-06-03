// rafce
import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Update = (props) => {
    const [ id, setId ] = useState('');
    const [ date, setDate ] = useState('');
    const [ start, setStart ] = useState('');
    const [ end, setEnd ] = useState('');
    const [ priority, setPriority ] = useState('');
    const [ item, setItem ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:5001/agenda/update/:id', {
            method: 'PUT',
            body: JSON.stringify({ agenda: {id: id, date: date, start: start, end: end, priority: priority, item: item }}),
            headers: new Headers({
            'Content-Type': 'application/json'
            })
            }) .then((res) => res.json())
            .then((logData) => {
                console.log(logData);
                setId('');
                setDate('');
                setStart('');
                setEnd('');
                setPriority('');
                setItem('');           
        })         
    }
    return (
        
        <div className="updateForm">
            <h2>Update Agenda Item</h2>
            
            <Form onSubmit={ handleSubmit } >
            <FormGroup>
                    <Label htmlFor='id'>ID</Label>
                    <Input name="id" value={ id } onChange={(e) => setId(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='date'>Date</Label>
                    <Input name="date" value={ date } onChange={(e) => setDate(e.target.value)}/>
                </FormGroup>


                {/* <FormGroup>
                    <Label for="Date">Date</Label>
                        <Input
                        type="date"
                        name="date"value={ date } onChange={(e) => setDate(e.target.value)}
                        id="newDate"
                        placeholder="date placeholder"
                        />
                </FormGroup> */}

                <FormGroup>
                    <Label htmlFor='start'>Start</Label>
                    <Input name="start" value={ start } onChange={(e) => setStart(e.target.value)}/>
                </FormGroup> 

                <FormGroup>
                    <Label htmlFor='end'>End</Label>
                    <Input name="end" value={ end } onChange={(e) => setEnd(e.target.value)}/>
                </FormGroup>  
               
                <FormGroup>
                    <Label htmlFor='priority'>Priority</Label>
                    <Input type="select" name="select" value={ priority } onChange={(e) => setPriority(e.target.value)} 
                    id="priority">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>  
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='item'>Description</Label>
                    <Input name="item" value={ item } onChange={(e) => setItem(e.target.value)}/>
                </FormGroup> 

                <Button type="submit">Submit</Button>
            </Form>         
        </div>
    )
}

export default Update
