import { useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import LeftContainer from "../UI/LeftContainer/LeftContainer";
import RightContainer from "../UI/RightContainer/RightContainer";

export default function MainApp(){
  const [user_id, setUser_id] = useState(1);
  const [selectedConversation, setSelectedConversation] = useState(0);

  const messagesByConversationId = useQuery(api.messages.getByConversationId, { conversation_id: selectedConversation });
  const registerTest = useMutation(api.users.register);
  const conversationsByUserId = useQuery(api.conversations.getConversationsNameByUserId, { user_id });
  const user = useQuery(api.users.getUserById, { user_id });

  function handleRegister() {
    const date = new Date().toISOString();
    setCreated_at(`${date}`);
    setTokenIdentifier(`${Math.floor(Math.random() * 1000000000)}`);
    setPublic_uuid(Math.floor(Math.random() * 1000000000));
    setRole("user");
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