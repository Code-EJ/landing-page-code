import { useState } from "react";
import { send } from "@emailjs/browser";
import BackButton from './Buttons/BackButton';

interface TelefoneModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TelefoneModal({ isOpen, onClose }: TelefoneModalProps) {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await send(
                "service_8f14plk",
                "default_template",
                {
                    to_email: "contato@juniorcode.com.br",
                    nome,
                    telefone
                },
                "ZUTIYrrCnJDBaM_WO"
            );

            setSuccess(true);
            setNome("");
            setTelefone("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Ocorreu um erro");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <div className="absolute top-2 left-3">
                    <BackButton onClick={onClose} />
                </div>

                <button
                    className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-xl font-semibold mb-4 text-center">Deixe seu número</h2>

                {success ? (
                    <p className="text-center text-green-600 font-semibold">
                        Obrigado! Seu número foi enviado.
                    </p>
                ) : (
                    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Seu nome"
                            className="border border-gray-300 px-4 py-2 rounded-md"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="(DDD) Telefone"
                            className="border border-gray-300 px-4 py-2 rounded-md"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                        <button
                            type="submit"
                            className={`bg-[#1A0B61] text-white px-4 py-2 rounded-md hover:bg-[#2a1a8c] transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={loading}
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
}
