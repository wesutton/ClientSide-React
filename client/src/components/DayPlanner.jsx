import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Today = () => {
    const [agendaList, setAgendaList] = useState()
    useEffect(() => { getData() }, [])
    const getData = async () => {
        let today = new Date()
        let strDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
        console.log(strDate)
        const response = await axios.get(`${URL}/${strDate}`)
        console.log(response)
        setAgendaList(response.data.agenda)
    }


const URL = 'http://localhost:5001/agenda'

    
    const removeData = (id) => {

        axios.delete(`${URL}/delete/${id}`).then(res => {
            const del = agendaList.filter(agendas => id !== agendas.id)
            setAgendaList(del)
        })
    }

    
    const renderHeader = () => {
        let headerElement = ['start', 'end', 'priority', 'description', 'id', 'delete', 'add']

        return headerElement.map((key, date) => {
            return <th key={date}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        console.log(agendaList)
        return agendaList && agendaList.map(({ id, start, end, priority, item }) => {
            return (
                <tr key={start}>
                    <td>{start}</td>
                    <td>{end}</td>
                    <td>{priority}</td> 
                    <td>{item}</td>
                    <td>{id}</td>
                    <td className='operation'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                    <td className='operation'>
                    <button type="button" className='button' data-toggle="modal" data-target="addNewItem">
                        Add
                    </button>
                    </td>
                    
                </tr>
            )
        })
    }
    return (
        <>
            <h1 id='title'>AGENDA</h1>
            <table id='list'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>   
            
        </>
    )
}


export default Today