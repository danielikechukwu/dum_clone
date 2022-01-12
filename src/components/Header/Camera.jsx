import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCamera} from '@fortawesome/free-solid-svg-icons'
import classes from './Camera.module.css'

function Camera() {
    return (
        <div className={classes.camera}>
            <FontAwesomeIcon icon={faCamera} />
        </div>
    )
}

export default Camera
