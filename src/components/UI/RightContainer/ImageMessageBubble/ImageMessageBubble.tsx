export default function ImageMessageBubble({ message, user_id }: { message: { url: string, sender_id: number }, user_id: number }) {
  return(
  <div className={`message-bubble ${user_id === message.sender_id ? 'message-bubble--sent' : 'message-bubble--received'}`}>
    <img src={message.url} height="300px" width="auto"/>;
  </div>
  );
}