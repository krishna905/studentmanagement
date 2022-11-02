import './Chat.css';
import React from 'react';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';
import { StudentContext } from '../StudentProfile/context/context';
const socket = io.connect('http://localhost:5001');

function DisplayChat() {
  const [username, setUsername] = useState('');
  const [showChat, setShowChat] = useState(false);
  const { studentUser } = React.useContext(StudentContext);
  const [{ CollegeId }] = studentUser;
  let RoomId = CollegeId;
  console.log('inside chat.js');
  console.log(RoomId);

  const joinRoom = () => {
    if (username !== '' && RoomId !== '') {
      socket.emit('join_room', RoomId);
      setShowChat(true);
    }
  };

  return (
    <div className="DisplayChats">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder={RoomId}
            value={RoomId}
            onChange={(event) => {
              RoomId = event.target.value;
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
          <button to="/">Go back to home</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={RoomId} />
      )}
    </div>
  );
}

export default DisplayChat;
