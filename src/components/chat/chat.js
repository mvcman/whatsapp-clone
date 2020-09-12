import React, { useState } from 'react';
import "./chat.css"
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutlined from '@material-ui/icons/Search';
import AttachFile from '@material-ui/icons/AttachFile';
import MoreVert from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../helpers/axios';

export default function Chat({ messages }){
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();
        console.log('message sent!');
        await axios.post('/message/new', {
            name: 'mandar',
            message: input,
            timestamp: new Date().toISOString(),
            received: true
        })
        setInput('');
    }
    return (
        <div className="chat">
            <div className="chat_header">
                <Avatar />
                <div className="chat_headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat_body">
                {
                    messages.map((message, i) => {
                        return (
                            <p key={i}className={ message.received ? "chat_message": "chat_message chat_reciever"}>
                            <span className="chat_name">{message.name}</span>
                            {message.message}
                            <span className="chat_timestamp">
                                {message.timestamp}</span>    
                        </p> 
                        )
                    })
                }
                {
                    //<p className="chat_message chat_reciever">
                    //<span className="chat_name">Vicky</span>
                    //Hello
                    //<span className="chat_timestamp">
                    //    {new Date().toUTCString()}</span>    
                    //</p>
                }
            </div>
            <div className="chat_footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input}
                    onChange={(e) => setInput(e.target.value)} 
                    placeholder="Type a message" 
                    type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    );
}