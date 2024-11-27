import ConversationsList from "../ConversationsList/ConversationsList";
import './styles.scss';

export default function LeftContainer({ conversations, selectedConversation, setSelectedConversation} : { conversationsByUserId: any, selectedConversation: number, setSelectedConversation: (conversation: number) => void }) {
  return (
    <div className="left-container">
    <ConversationsList 
     conversations={conversations}
     setSelectedConversation={setSelectedConversation} />
    </div>
  );
}