import React from 'react';
import './Message.css';
import { format } from 'date-fns';

function Message({ message, timestamp, user, userImage, day }) {
  const date = format(new Date(timestamp?.toDate()), "HH:mm");

  return (
    <div className='message'>
      <img src={userImage} alt={user} />
      <div className='message__info'>
        <h4>
          <span className='message__user'>
            {user}
          </span>
          <span className='message__timestamp'>
            {date}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
