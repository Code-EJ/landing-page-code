import { Link } from 'react-router-dom';
import Logo from '../assets/logo-code.png';
import { useState } from 'react';
import TelefoneModal from './TelefoneModal';

export default function Header() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <header className="w-full px-6 py-4 bg-white flex items-center justify-around">
            <a href="#home">
                <img src={Logo} alt="Logo CODE[]" className="h-8 sm:h-10" />
            </a>

            <nav className="hidden md:flex space-x-10 text-[#1A0B61] font-medium text-base">
                <a href="#sobre-nos" className="hover:text-white transition">Sobre Nós</a>
                <a href="#nosso-espaco" className="hover:text-white transition">Alugue o Auditório</a>
                <a href="#nossos-servicos" className="hover:text-white transition">Produtos</a>
                <Link to="/contato" className="hover:text-white transition">Contate-nos</Link>
            </nav>

            <button
                onClick={() => setModalOpen(true)}
                className="bg-[#240834] text-white font-bold rounded-full px-8 py-2 text-sm sm:text-base hover:bg-[#2a1a8c] transition"
            >
                Ligaremos<br />para Você
            </button>

            <TelefoneModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </header>
    );
}
