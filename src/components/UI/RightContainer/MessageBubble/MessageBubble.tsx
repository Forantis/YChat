import './styles.scss'

interface Message {
  body: string;
  sender_id: number;
}

export default function MessageBubble({ message, user_id }: { message: Message, user_id: number }) {

  return (
    <div className={`message-bubble ${user_id === message.sender_id ? 'message-bubble--sent' : 'message-bubble--received'}`}>
      <p className='message-bubble__text'>{message.body}</p>
    </div>
  );
}