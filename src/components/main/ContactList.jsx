import React from 'react'
import classes from './ContactList.module.css'

function ContactList(props) {
    return (
        
            <li className={classes.cts}>

                <div className={classes.ctsLeftD}> 

                    <div>
                        <img src={props.image} alt="Jims image" />
                    </div>

                    <div className={classes.ctsNameChat}>

                      <h3>{props.name}</h3>
                                
                     <div  className={classes.chat}>{props.chat}</div>

                    </div>
                
                </div>
               

                <div className={classes.lastSeen}>
                   <div className={classes.time}>{props.time}</div> 
                </div>
       
             </li>
      
    )
}

export default ContactList
