// @ts-nocheck
import { useEffect, useState } from "react";
import MessagesList from "./MessagesList/MessagesList"
import MessageToolbar from "./MessageToolbar/MessageToolbar";
import './styles.scss'

interface Message {
  _id: string;
  text: string;
  sender_id: string;
}

interface RightContainerProps {
  messages: Message[];
  user_id: number;
  selectedConversation: number;
}

export default function RightContainer({ messages, user_id, selectedConversation }: RightContainerProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (messages && selectedConversation !== 0) {
      setIsLoading(false);
    }
  }, [messages]);

  if (isLoading) {
    return <div className="right-container--loading"><img src="/images/logo.png" alt="YChat logo" /></div>;
  }

  return (
    <div className="right-container"> 
      <MessagesList messages={messages} user_id={user_id} />
      <MessageToolbar selectedConversation={selectedConversation} user_id={user_id}/>
    </div>
  )
  
}