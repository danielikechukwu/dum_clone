import React from 'react'
import classes from './RightIcon.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWifi,faSignal, faBatteryFull} from '@fortawesome/free-solid-svg-icons'



function RightIcon() {
    return (
        <div className={classes.righticons}>

            <FontAwesomeIcon icon={faWifi} />            
            <FontAwesomeIcon icon={faSignal} />
            <FontAwesomeIcon icon={faSignal} />
            <h5>93%</h5>
            <FontAwesomeIcon icon={faBatteryFull} />
        </div>
    )
}

export default RightIcon
