import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/sidebar';
import Chat from './components/chat/chat';

function App() {
  return (
    <div className="app">
        <div className="app_body">
            <Sidebar />
            <Chat />
        </div>
    </div>
  );
}

export default App;
