import React, { useEffect, useState } from "react";
import { api } from "../../../convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import MessagesList from "../UI/MessagesList/MessagesList";
import LeftContainer from "../UI/LeftContainer/LeftContainer";
import RightContainer from "../UI/RightContainer/RightContainer";

export default function MainApp(){
  const [sender, setSender] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [tokenIdentifier, setTokenIdentifier] = useState("");
  const [public_uuid, setPublic_uuid] = useState(0);
  const [role, setRole] = useState("");
  const [user_id, setUser_id] = useState(2);
  const [conversation_id, setConversation_id] = useState(0);
  const [selectedConversation, setSelectedConversation] = useState(0);

  const messagesByConversationId = useQuery(api.messages.getByConversationId, { conversation_id: selectedConversation });
  const registerTest = useMutation(api.users.register);
  const conversationsByUserId = useQuery(api.conversations.getConversationsNameByUserId, { user_id });

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
     setSelectedConversation={setSelectedConversation} />
      <RightContainer messages={messagesByConversationId} user_id={user_id} selectedConversation={selectedConversation} />
    </div>
  );
}