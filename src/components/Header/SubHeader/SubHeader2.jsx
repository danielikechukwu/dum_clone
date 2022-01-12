import React from 'react'
import classes from './SubHeader2.module.css'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons} from '@fortawesome/free-solid-svg-icons'
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'


function SubHeader2() {
    return (
        <div className={classes.subHeader2}>
                <h3>WhatsApp</h3>

                <div className={classes.rightIconSubHeader2}>
                  <FontAwesomeIcon icon={faSearchengin} />
                <FontAwesomeIcon icon={faIcons} />   
                </div>
                
        </div>
    )
}

export default SubHeader2
