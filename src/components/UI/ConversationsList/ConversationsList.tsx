import './styles.scss';
import { useState, useEffect } from 'react';
import ConversationCard from '../ConversationCard/ConversationCard';

interface Conversation {
  _id: string;
  conversation_name: string;
  conversation_public_uuid: string;
}

interface ConversationsListProps {
  conversations: Conversation[];
  setSelectedConversation: (conversation: Conversation) => void;
}

export default function ConversationsList({ conversations, setSelectedConversation }: ConversationsListProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (conversations && conversations.length > 0) {
      setIsLoading(false);
    }
  }, [conversations]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="conversations-list">
      {conversations.map((conversation: Conversation) => (
        <ConversationCard key={conversation._id} conversation={conversation} setSelectedConversation={setSelectedConversation}/>
      ))}
    </div>
  );
}
