import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from '../../firebase';
import './ChatInput.css';
import firebase from 'firebase';
import { useStateValue } from '../../StateProvider';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault()

    if (channelId && input !== '') {
      db.collection('rooms')
        .doc(channelId)
        .collection('messages')
        .add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: user.displayName,
          userImage: user.photoURL,
        });
    }
  }

  return (
    <div className='chatInput'>
      <form>
        <input
          input={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button
          type='submit'
          onClick={sendMessage}
        >
          SEND
        </Button>
      </form>
    </div>
  )
}

export default ChatInput
