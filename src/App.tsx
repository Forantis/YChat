import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  const messages = useQuery(api.messages.get);
  return (
    <div className="App">
      {messages?.map(({ _id, body }) => <div key={_id}>{body}</div>)}
    </div>
  );
}

export default App;

