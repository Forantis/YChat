import './styles.scss';
import { useState, useEffect } from 'react';
import ConversationCard from '../ConversationCard/ConversationCard';
import { Conversation } from '../LeftContainer';
import { User } from '../LeftContainer';

interface ConversationsListProps {

  conversations: Conversation[];
  setSelectedConversation: (conversation: Conversation) => void; 
  user: User;

}

interface ConversationsListProps {
  conversations: Conversation[];
  setSelectedConversation: (conversation: Conversation) => void; 
}

export default function ConversationsList({ conversations, setSelectedConversation, user }: ConversationsListProps) {
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
        <ConversationCard key={conversation._id} conversation={conversation} setSelectedConversation={setSelectedConversation} user={user}/>
      ))}
    </div>
  );
}
