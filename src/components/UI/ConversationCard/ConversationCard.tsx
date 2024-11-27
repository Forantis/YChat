import './styles.scss'
import { useQuery } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

interface Conversation {
  conversation_name: string;
  conversation_public_uuid: string;
}

export default function ConversationCard({ conversation, setSelectedConversation }: { conversation: Conversation, setSelectedConversation: (conversation: Conversation) => void }) {
  const { conversation_name, conversation_public_uuid, last_update } = conversation;
  const lastMessage = useQuery(api.messages.getLastMessageByConversationId, { conversation_id: conversation_public_uuid });
  
  // Show the time of the last message in the conversation card and the last message
  let shownDateOrTime;
  let lastMessageText;
  if(lastMessage){
  lastMessageText = lastMessage[0].body;
  const now = new Date();
  const lastUpdateDate = new Date(lastMessage[0].created_at);
  const timeDifference = now.getTime() - lastUpdateDate.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  if (timeDifference < oneDay) {
    shownDateOrTime = lastUpdateDate.toLocaleTimeString();
  } else if (timeDifference < 2 * oneDay) {
    shownDateOrTime = 'yesterday';
  } else {
    shownDateOrTime = lastUpdateDate.toLocaleDateString();
  }
}

  return (
    <div className="conversation-card" onClick={() => setSelectedConversation(conversation_public_uuid)}>
      <div className='conversation-card__content'>
        <h3 className="conversation-card__content__title">{conversation_name}</h3>
        <p className="conversation-card__content__last-message">{lastMessageText}</p>
      </div>
      
      <p className="conversation-card__last-update">{shownDateOrTime}</p>
    </div>
  );
}