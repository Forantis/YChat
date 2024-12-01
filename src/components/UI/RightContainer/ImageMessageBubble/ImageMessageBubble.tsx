interface ImageMessageBubbleProps {
  message: {
    url: string;
    sender_id: number;
  };
  user_id: number;
  setUrlImageClicked: (url: string) => void;
  setIsImageClicked: (isImageClicked: boolean) => void;
}

export default function ImageMessageBubble({ message, user_id, setUrlImageClicked, setIsImageClicked }: ImageMessageBubbleProps) {
  function handleImageClick() {
    setUrlImageClicked(message.url);
    setIsImageClicked(true);
  }

  return(
  <div className={`message-bubble ${user_id === message.sender_id ? 'message-bubble--sent' : 'message-bubble--received'}`} style={{cursor: 'pointer'}}
  onClick={() => handleImageClick()}>
    <img src={message.url} height="300px" width="auto"/>;
  </div>
  );
}