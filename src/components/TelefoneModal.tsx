import BackButton from './Buttons/BackButton';

interface TelefoneModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function TelefoneModal({ isOpen, onClose }: TelefoneModalProps) {
    if (!isOpen) return null;

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
                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="border border-gray-300 px-4 py-2 rounded-md"
                    />
                    <input
                        type="tel"
                        placeholder="(DDD) Telefone"
                        className="border border-gray-300 px-4 py-2 rounded-md"
                    />
                    <button
                        type="submit"
                        className="bg-[#1A0B61] text-white px-4 py-2 rounded-md hover:bg-[#2a1a8c] transition"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
}
