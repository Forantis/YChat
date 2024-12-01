import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useState } from "react";
import "./App.scss";
import LandingPage from './components/LandingPage/LandingPage'
import MainApp from './components/MainApp/MainApp';

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
  const [user_id, setUser_id] = useState(0);
  const [conversation_id, setConversation_id] = useState(0);

  const messagesByConversationId = useQuery(api.messages.getByConversationId, { conversation_id: conversation_id });
  const registerTest = useMutation(api.users.register);
  const conversationsByUserId = useQuery(api.conversations.getConversationsNameByUserId, { user_id });

  function handleRegister() {
    const date = new Date().toISOString();
    setCreated_at(`${date}`);
    setTokenIdentifier(`${Math.floor(Math.random() * 1000000000)}`);
    setPublic_uuid(Math.floor(Math.random() * 1000000000));
    setRole("user");
  }
  // Rendu de l'application
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/app" 
          element={
            //<ProtectedRoute>
              <MainApp />
            //</ProtectedRoute>
          } 
        />
        <Route path='/test' 
        element={
          <div className="App">
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
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

