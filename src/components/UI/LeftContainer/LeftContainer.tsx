// @ts-nocheck
import ConversationsList from "./ConversationsList/ConversationsList";
import LeftContainerHeader from "./LeftContainerHeader/LeftContainerHeader";
import './styles.scss';
import { useState, useEffect } from "react";

export interface Conversation {
  _id: number;
  _creationTime: number;
  conversation_public_uuid: number;
  last_update: string;
  conversation_name: string;
}

export interface User {
  _id: number;
  public_uuid: string;
  name: string;
  surname: string;
  email: string;
}

interface LeftContainerProps {
  conversations: Conversation[] | undefined;
  setSelectedConversation: (conversation: Conversation) => void;
  user: User;
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
     setSelectedConversation={setSelectedConversation} 
     user={user}/>
    </div>
  );
}