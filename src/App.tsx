import "./App.css";
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";

function App() {
  const [sender, setSender] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [tokenIdentifier, setTokenIdentifier] = useState("");
  const [public_uuid, setPublic_uuid] = useState(0);
  const [role, setRole] = useState("");

  const messages = useQuery(api.messages.getBySenderId, { sender_id: sender });
  const registerTest = useMutation(api.users.register);

  function handleRegister() {
    const date = new Date().toISOString();
    setCreated_at(`${date}`);
    setTokenIdentifier(`${Math.floor(Math.random() * 1000000000)}`);
    setPublic_uuid(Math.floor(Math.random() * 1000000000));
    setRole("user");
  }

  return (
    <div className="App">
      {messages?.map(({ _id, body }) => <div key={_id}>{body}</div>)}
      <input
        type="number"
        value={sender}
        onChange={(e) => setSender(parseInt(e.target.value))}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
      type="text" 
      placeholder="name" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input
      type="text"
      placeholder="surname"
      value={surname}
      onChange={(e) => setSurname(e.target.value)}
      />

      <button
        onClick={async () => {
          handleRegister();
          await registerTest({ 
            email, 
            password, 
            name, 
            surname, 
            created_at, 
            tokenIdentifier, 
            public_uuid, 
            role });
        }}
      > Login Test</button>
    </div>
  );
}

export default App;

