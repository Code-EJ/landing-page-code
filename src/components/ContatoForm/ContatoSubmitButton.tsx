import React from "react";

interface ContatoSubmitButtonProps {
  loading: boolean;
  success: boolean;
  error?: string;
}

const contatoSubmitButton: React.FC<ContatoSubmitButtonProps> = ({
  loading,
  success,
  error,
}) => (
  <div className="flex justify-end">
    {success ? (
      <button
        type="button"
        disabled
        className="bg-green-500 text-white px-10 py-5 rounded-3xl cursor-not-allowed flex items-center justify-center"
      >
        <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
        Enviado!
      </button>
    ) : loading ? (
      <button
        type="button"
        disabled
        className="bg-turquesa text-white px-10 py-5 rounded-3xl opacity-60 cursor-not-allowed flex items-center justify-center"
      >
        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
        Enviando...
      </button>
    ) : (
      <button
        type="submit"
        className="bg-turquesa text-white px-10 py-5 rounded-3xl hover:bg-lightturquesa transition"
      >
        Enviar
      </button>
    )}
    {error && <span className="text-red-500 ml-4">{error}</span>}
  </div>
);

export default contatoSubmitButton;
