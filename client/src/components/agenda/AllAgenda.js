import React, { useState, useEffect } from 'react'
import axios from 'axios'


const AllAgenda = () => {
    const [allItems, setAllItems] = useState()
    useEffect(() => { getData() }, [])
    const getData = async () => {
        const response = await axios.get('http://localhost:3001/agenda/entries')
        console.log(response)
        setAllItems(response.data.agenda)
        }
   
    

    
    const renderHeader = () => {
        let headerElement = ['id', 'date', 'start', 'end', 'priority', 'item']

        return headerElement.map((key, id) => {
            return <th key={id}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        console.log(allItems)
        return  allItems && allItems.map(({ id, date, start, end, priority, item }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{start}</td>
                    <td>{end}</td>
                    <td>{priority}</td>
                    <td>{item}</td>
                    
                    
                    
                </tr>
            )
        })
    }

    return (
        <>
            <h1 id='title'>ALL AGENDA ITEMS</h1>
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




export default AllAgenda
