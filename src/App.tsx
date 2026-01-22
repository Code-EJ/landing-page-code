import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from './pages/Contato';
import Reserva from "./pages/Reserva";
import PrivacyPolicy from "./pages/Politicas";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contato" element={<Contato />} /> 
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    </Routes>
  );
}

export default App;
