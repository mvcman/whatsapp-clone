import React from 'react';
import { Avatar } from '@material-ui/core';
import './sidebarchat.css';

export default function SidebarChat(){
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat_info">
                <h2>Room Name</h2>
                <p>This is the last message og this room</p>
            </div>
        </div>
    );
}