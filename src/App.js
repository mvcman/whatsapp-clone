import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';
import Pusher from 'pusher-js';
import axios from './helpers/axios';

function App() {
    const [messages, setMessages] = React.useState([]);
    useEffect(() => {
        axios.get('/messages/sync').then(response => {
            setMessages(response.data);
        })
    }, [])
    useEffect(() => {
        const pusher = new Pusher('f996da49b8f75b5608c4', {
            cluster: 'ap2'
          });
      
        const channel = pusher.subscribe('messages');
        channel.bind('inserted', function(newMessage) {
            //alert(JSON.stringify(newMessage));
            setMessages((prev) => [...prev, newMessage]);
        });
    }, []);
    console.log(messages);
  return (
    <div className="app">
        <div className="app_body">
            <Sidebar />
            <Chat messages={messages}/>
        </div>
    </div>
  );
}

export default App;
