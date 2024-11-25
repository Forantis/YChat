interface Conversation {
  conversation_name: string;
  conversation_public_uuid: string;
}

export default function ConversationCard({ conversation, setSelectedConversation }: { conversation: Conversation, setSelectedConversation: (conversation: Conversation) => void }) {
  return (
    <div className="conversation-card" onClick={() => setSelectedConversation(conversation.conversation_public_uuid)}>
      <h3>{conversation.conversation_name}</h3>
      <p>{conversation.conversation_public_uuid}</p>
    </div>
  );
}