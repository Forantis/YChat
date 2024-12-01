import ConversationsList from "./ConversationsList/ConversationsList";
import LeftContainerHeader from "./LeftContainerHeader/LeftContainerHeader";
import './styles.scss';
import { useState, useEffect } from "react";

interface Conversation {
  _id: string;
  conversation_name: string;
  conversation_public_uuid: string;
}

interface LeftContainerProps {
  conversations: Conversation[];
  setSelectedConversation: (conversation: Conversation) => void;
  user: any;
}


export default function LeftContainer({ conversations, setSelectedConversation, user} : LeftContainerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLoaded(true);
    }
  }, [user]);

  return (
    <div className="left-container">
    {isLoaded ? <LeftContainerHeader user={user} /> : null}
    <ConversationsList 
     conversations={conversations}
     setSelectedConversation={setSelectedConversation} />
    </div>
  );
}