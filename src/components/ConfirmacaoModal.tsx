import React from "react";

interface ConfirmacaoModalProps {
    onClose: () => void;
}

const ConfirmacaoModal: React.FC<ConfirmacaoModalProps> = ({ onClose }) => {
    return (
        <div className="bg-white rounded-lg p-8 w-80 text-center shadow-md">
            <p className="text-gray-800 font-medium mb-6">
                Assim que possível, nossa equipe entrará em contato com você!
            </p>

            <div className="flex justify-center mb-6">
                <div className="bg-purple-100 rounded-full p-4">
                    <svg
                        className="w-12 h-12 text-purple-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                        <circle cx="12" cy="12" r="9" stroke="currentColor" />
                    </svg>
                </div>
            </div>

            <button
                onClick={onClose}
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition"
            >
                Confirmar
            </button>
        </div>
    );
};

export default ConfirmacaoModal;