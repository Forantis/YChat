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
  return (
    <div className="right-container"> 
      <MessagesList messages={messages} user_id={user_id} />
      <MessageToolbar selectedConversation={selectedConversation} user_id={user_id}/>
    </div>
  )
  
}