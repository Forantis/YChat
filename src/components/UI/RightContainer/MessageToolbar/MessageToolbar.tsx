import { useState } from 'react';
import './styles.scss'
import { api } from '../../../../../convex/_generated/api';
import { useMutation } from 'convex/react';


interface MessageToolbarProps {
    selectedConversation: number;
    user_id: string;
}

export default function MessageToolbar({ selectedConversation, user_id }: MessageToolbarProps) {
    const sendMessage = useMutation(api.messages.send);
    //const user = window.localStorage.getItem('user');
    const user = user_id;
    const [messageBody, setMessageBody] = useState('');

    function handleMessageSubmit() {
        sendMessage({conversation_id: selectedConversation, sender_id: user, body: messageBody});
        setMessageBody('');
    }

  /* TO DO - Implement the message toolbar logic  */
    return (
        <div className="message-toolbar">
            <button className="message-toolbar__button">
                <img src="/images/icons/attach.svg" alt="Attach file" />
            </button>

            <input 
            type="text" 
            name='message-body'
            className="message-toolbar__input" 
            placeholder="Type a message" 
            value={messageBody}
            onChange={(e) => setMessageBody(e.target.value)} />

            <button className="message-toolbar__button" onClick={handleMessageSubmit}>
                <img src="/images/icons/send.svg" alt="Send message" />
            </button>

            <button className="message-toolbar__button">
                <img src="/images/icons/mic.svg" alt="Record voice message" />
            </button>
        </div>
    );
}