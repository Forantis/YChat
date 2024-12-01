import './styles.scss'
import { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';

interface Conversation {
  conversation_name: string;
  conversation_public_uuid: string;
}

export default function ConversationCard({ conversation, setSelectedConversation, user }: { conversation: Conversation, setSelectedConversation: (conversation: Conversation) => void }) {
  const { conversation_name, conversation_public_uuid } = conversation;
  const updateReadStatusMutation = useMutation(api.messages.updateReadStatus);
  const [lastMessage, setLastMessage] = useState([]);
  
  const lastMessageQuery = useQuery(api.messages.getLastMessageByConversationId, { conversation_id: conversation_public_uuid });

  useEffect(() => {
    if (lastMessageQuery) {
      setLastMessage(lastMessageQuery);
    }
  }, [lastMessageQuery]);
  
  // The follow is to show the time of the last message in the conversation card and the last message
  let shownDateOrTime;
  let lastMessageText;
  let readStatus;
  let sender;
  let lastUpdateDate;
  
  if(lastMessage.length > 0) {
  lastMessageText = lastMessage[0].body;
  readStatus = lastMessage[0].read_status;
  sender = lastMessage[0].sender_id;
  
  const now = new Date();
  if(lastMessage[0].last_update) {
    lastUpdateDate = new Date(lastMessage[0].last_update);
  } else {
    lastUpdateDate = new Date(lastMessage[0].created_at);
  }
  const timeDifference = now.getTime() - lastUpdateDate.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (timeDifference < oneDay) {
    shownDateOrTime = lastUpdateDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  } else if (timeDifference < 2 * oneDay) {
    shownDateOrTime = 'yesterday';
  } else {
    shownDateOrTime = lastUpdateDate.toLocaleDateString();
  }
}

  const updateReadStatus = async () => {
    console.log(user)
    if (lastMessage.length === 0 || lastMessage[0].read_status === 'read' || lastMessage[0].sender_id === user[0].public_uuid) {
      return;
    }
    await updateReadStatusMutation({ message_id: lastMessage[0]._id, read_status: 'read' });
  }

  return (
    <div className="conversation-card" onClick={() => {
      setSelectedConversation(conversation_public_uuid);
      updateReadStatus();
      }}>
      <div className='conversation-card__avatar' >
        <img src="/images/1.jpeg" alt="avatar" style={{ width: '60px', height: '60px' }} />
      </div>
      <div className='conversation-card__summary'>
        <div className='conversation-card__summary__content'>
          <h3 className="conversation-card__summary__content__title">{conversation_name}</h3>
          <p className="conversation-card__summary__content__last-message">{lastMessageText}</p>
        </div>
        <div className='conversation-card__summary__infos'>
        <p className="conversation-card__summary__infos__last-update">{shownDateOrTime}</p>
        {lastMessage.length > 0 ? <p className="conversation-card__infos__read-status">{readStatus}ed</p> 
        : <p className="conversation-card__summary__infos__read-status"></p>}
        </div>
      </div>
    </div>
  );
}