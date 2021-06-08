//  *************************      Generates today's date, used in DayPlanner  ******************

import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }   
    });
    return(
        <div className="date">     
            <p> {date.toLocaleDateString()}</p>
        </div>
    )
}

export default DateTime

// to add time:  <p> Time : {date.toLocaleTimeString()}</p>
