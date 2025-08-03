import { Link } from "react-router-dom";
import Logo from "../assets/logo-code.png";
import { useState } from "react";
import TelefoneModal from "./TelefoneModal";
import { Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white px-4 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <a href="#home">
          <img src={Logo} alt="Logo CODE[]" className="h-8 sm:h-10" />
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#1A0B61] focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <nav className="hidden md:flex space-x-10 text-[#1A0B61] font-medium text-base items-center">
          <a href="#sobre-nos" className="hover:text-white transition">
            Sobre Nós
          </a>
          <Link to="/reserva" className="hover:text-white transition">
            Alugue o Auditório
          </Link>
          <a href="/NossosServicos" className="hover:text-white transition">
            Nossos Serviços
          </a>
          <Link to="/contato" className="hover:text-white transition">
            Contate-nos
          </Link>

          <button
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 bg-[#240834] text-white font-bold rounded-full px-5 py-4 text-sm hover:bg-[#2a1a8c] transition"
          >
            <Phone size={18} />
            <span>Ligaremos para Você</span>
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col space-y-4 text-[#1A0B61] font-medium text-base">
          <a
            href="#sobre-nos"
            className="hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Sobre Nós
          </a>
          <Link
            to="/reserva"
            className="hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Alugue o Auditório
          </Link>
          <a
            href="/NossosServicos"
            className="hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Nossos Serviços
          </a>
          <Link
            to="/contato"
            className="hover:text-white transition"
            onClick={() => setMenuOpen(false)}
          >
            Contate-nos
          </Link>

          <button
            onClick={() => {
              setModalOpen(true);
              setMenuOpen(false);
            }}
            className="flex items-center gap-2 bg-[#240834] text-white font-bold rounded-full px-5 py-2 text-sm hover:bg-[#2a1a8c] transition w-fit"
          >
            <Phone size={18} />
            <span>Ligaremos para Você</span>
          </button>
        </div>
      )}

      <TelefoneModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </header>
  );
}
