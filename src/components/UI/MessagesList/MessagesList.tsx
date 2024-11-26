import { useEffect, useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./styles.scss"

interface MessagesListProps {
  messages: Message[];
  user_id: string;
}

interface Message {
  _id: string;
  text: string;
  sender_id: string;
}

export default function MessagesList({ messages, user_id }: MessagesListProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (messages && messages.length > 0) {
      setIsLoading(false);
    }
  }, [messages]);

  if (isLoading) {
    return <div><img src="/images/logo.png" alt="YChat logo" /></div>;
  }

  return (
    <div className="messages-list">
      {messages && messages.map((message: Message) => (
        <MessageBubble key={message._id} message={message} user_id={user_id} />
      ))}
    </div>
  );
}