import React from 'react'
import Date from './DateAgenda';

const DayHeader = () => {
    return (
        <div>
            <h2 className="font-weight-light display-1 text-center">
                DAY PLANNER
            </h2>

            <div className="headerDate"> 
                <Date />
            </div>
        
            
        </div>
    )
}

export default DayHeader
