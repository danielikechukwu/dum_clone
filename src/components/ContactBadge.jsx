import React from 'react'
import classes from './ContactBadge.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'


function ContactBadge() {
    return (
        <div className={classes.contactbadge}>

            <FontAwesomeIcon icon={faComment} />
            
        </div>
    )
}

export default ContactBadge
