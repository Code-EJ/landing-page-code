import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Contato from './pages/Contato';
import Reserva from "./pages/Reserva";
import NossosServicos from "./sections/SecaoNossosServicos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/contato" element={<Contato />} /> */}
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/NossosServicos" element={<NossosServicos />} />
    </Routes>
  );
}

export default App;
