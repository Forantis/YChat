import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";
import LeftContainer from "../UI/LeftContainer/LeftContainer";
import RightContainer from "../UI/RightContainer/RightContainer";

export default function MainApp(){
  const user_id = parseInt(localStorage.getItem('public_uuid') || '0');
  const [selectedConversation, setSelectedConversation] = useState(0);
  const navigate = useNavigate();

  const messagesByConversationId = useQuery(api.messages.getByConversationId, { conversation_id: selectedConversation });
  const conversationsByUserId = useQuery(api.conversations.getConversationsNameByUserId, { user_id });
  const user = useQuery(api.users.getUserById, { user_id });

  if(!localStorage.getItem('tokenIdentifier') || !localStorage.getItem('public_uuid')){
    navigate('/');
  }


  return (
    <div className="App">
     <LeftContainer 
     conversations={conversationsByUserId}
     selectedConversation={selectedConversation} 
     setSelectedConversation={setSelectedConversation} 
     user ={user}/>
      <RightContainer messages={messagesByConversationId} user_id={user_id} selectedConversation={selectedConversation} />
    </div>
  );
}