import './styles.scss'

export default function MessageBubble({ message, user_id }: { message: Message }) {

  return (
    <div className={`message-bubble ${user_id === message.sender_id ? 'message-bubble--sent' : 'message-bubble--received'}`}>
      <p className='message-bubble__text'>{message.body}</p>
    </div>
  );
}