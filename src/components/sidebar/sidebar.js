import React from 'react';
import "./sidebar.css"
//import { IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlined from '@material-ui/icons/Search';
import { IconButton, Avatar } from '@material-ui/core';

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <Avatar src="https://imagej.nih.gov/ij/images/baboon.jpg" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search and start new chat" />
                </div>
            </div>
        </div>
    );
}