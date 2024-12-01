import { useState } from "react";
import MessageBubble from "../MessageBubble/MessageBubble";
import ImageMessageBubble from "../ImageMessageBubble/ImageMessageBubble";
import ImageModal from "../ImageModal/ImageModal";
import "./styles.scss"

interface MessagesListProps {
  messages: Message[];
  user_id: number;
}

interface Message {
  _id: string;
  body: string;
  sender_id: number;
  format: string;
  url: string;
}

export default function MessagesList({ messages, user_id }: MessagesListProps) {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [urlImageClicked, setUrlImageClicked] = useState("");

  return (
    <div className="messages-list">
      {messages && messages.map((message: Message) => (
        message.format === "image" ?
          <ImageMessageBubble key={message._id} message={message} user_id={user_id} setUrlImageClicked={setUrlImageClicked} setIsImageClicked={setIsImageClicked} /> :
          <MessageBubble key={message._id} message={message} user_id={user_id} /> 
      ))}
      <ImageModal isImageClicked={isImageClicked} urlImageClicked={urlImageClicked} setIsImageClicked={setIsImageClicked} />
    </div>
  );
}