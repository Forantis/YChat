import { BrowserRouter, Routes, Route} from 'react-router-dom';
import "./App.scss";
import LandingPage from './components/LandingPage/LandingPage'
import MainApp from './components/MainApp/MainApp';

function App() {

  // Rendu de l'application
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/app" 
          element={<MainApp />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

