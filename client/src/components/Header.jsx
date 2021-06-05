import React from 'react'
import Date from '../components/DateAgenda';

const Header = () => {
    return (
        <div>
            <h1 className="font-weight-light display-1 text-center">
                DAY PLANNER
            </h1>

            <div className="headerDate"> 
                <Date />
            </div>
        
            
        </div>
    )
}

export default Header
