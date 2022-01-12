import React from 'react'
import ChatList from './ChatList'
import classes from './Header.module.css'
import SubHeader1 from './SubHeader/SubHeader1'
import SubHeader2 from './SubHeader/SubHeader2'
import Camera from './Camera'

function Header() {
    return (
        <div className={classes.header}>

          
            <SubHeader1 />
            <SubHeader2 />

            <div className={classes.subHeader3}>
               
               <Camera />
                <ul>
                    <li>
                        CHATS
                        <ChatList />
                    </li>
                    <li>STATUS</li>
                    <li>CALLS</li>
                </ul>
                
            </div>
        </div>
    )
}

export default Header
