import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

function App() {
  const [sender, setSender] = useState(0);
  const messages = useQuery(api.messages.getBySenderId, { sender_id: sender });

  return (
    <div className="App">
      {messages?.map(({ _id, body }) => <div key={_id}>{body}</div>)}
      <input
        type="number"
        value={sender}
        onChange={(e) => setSender(parseInt(e.target.value))}
      />
    </div>
  );
}

export default App;

