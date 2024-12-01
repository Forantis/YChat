import { useState } from 'react';
import { api } from "../../../../../convex/_generated/api";
import { useMutation } from "convex/react";
import './style.scss';

interface User {
  name: string;
  surname: string;
  public_uuid: string;
}

interface LeftContainerHeaderProps {
  user: User;
}

export default function LeftContainerHeader({ user }: LeftContainerHeaderProps) {
  const { name, surname, public_uuid } = user[0];
  const [showNewConversation, setShowNewConversation] = useState(false);
  const [nbInvitations, setNbInvitations] = useState(1);
  const [newConversationName, setNewConversationName] = useState("");
  const [newConversationUsers, setNewConversationUsers] = useState<string[]>([]);
  const [newConversationError, setNewConversationError] = useState("");

  const createConversation = useMutation(api.conversations.createConversation);

  function handleNewConversation() {
    const invitedUsers = Array.from(new Set(newConversationUsers.filter(user => user.trim() !== "")));
    if (invitedUsers.length === 0) {
      setNewConversationError("You must invite at least one person to the conversation");
      return;
    }
    const invitedUsersInt = invitedUsers.map(user => parseInt(user, 10));
    createConversation({
      conversation_name: newConversationName,
      conversation_public_uuid: Math.floor(Math.random() * 1000000000),
      last_update: new Date().toISOString(),
      current_user_id: public_uuid,
      invited_user_id: invitedUsersInt
    });
  }
    

    return (
        <div className="left-container-header">
            <h1 className='left-container-header__hello'>Hello {name} {surname}</h1>
            <h2 className='left-container-header__id'>Your public Id is: <br /><b>{user[0].public_uuid}</b></h2> 
            <button className='left-container-header__new-conversation' onClick={() => {
              setShowNewConversation(!showNewConversation);
              setNbInvitations(1);
              }}>New Conversation</button>
              
            {showNewConversation ?
                <div className='left-container-header__new-conversation-form'>
                    <input type="text" placeholder={`Enter conversation name ${nbInvitations === 1 ? "(opt.)" : ""}`} 
                    onChange={(e) => setNewConversationName(e.target.value)}
                    />

                    <button onClick={() => setNbInvitations(nbInvitations + 1)}>Add another person</button>
                      {Array.from({ length: nbInvitations }).map((_, index) => (
                        <input key={index} type="text" placeholder="Enter public uuid" onChange={(e) => {
                          const updatedUsers = [...newConversationUsers];
                          updatedUsers[index] = e.target.value;
                          setNewConversationUsers(updatedUsers);
                        }} />
                      ))}
                      {nbInvitations > 1 &&
                      <button onClick={() => {
                        setNbInvitations(nbInvitations - 1);
                        const updatedUsers = [...newConversationUsers];
                        updatedUsers.pop();
                        setNewConversationUsers(updatedUsers);
                      }}>Remove last person</button>
                    }

                    <button onClick={handleNewConversation}>Create</button>
                    {newConversationError ? <div id='new-conversation-form-error'>{newConversationError}</div> : null}
                </div> : null}
        </div>
    );
}