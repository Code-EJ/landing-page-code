import BackButton from "../Buttons/BackButton";

interface ReservaFormProps {}

import { useState } from "react";

export default function ReservaForm({}: ReservaFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);

      window.location.href = "/confirmacaoModal";
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="bg-white rounded-lg shadow-2xl p-10 w-full max-w-5xl relative">
        <div className="top-2 left-3 p-3">
          {/* Backbutton */}
          <BackButton />

          {/* Texto */}
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">
                Formulário de Reserva do Auditório
              </h2>
              <h3 className="mb-3 text-center font-thin text-sm">
                Reserve nosso auditório para seu evento decolar!
              </h3>
            </div>
          </div>
        </div>

        {/* Forms */}
        <form
          className="flex flex-col p-5 justify-evenly"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-row justify-evenly">
            <div className="h-full gap-5 flex flex-col">
              <input
                type="text"
                placeholder="Nome Completo"
                className=" shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                required
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
                pattern="[0-9]{10,11}"
                title="Digite um número de telefone válido com 10 ou 11 dígitos"
                required
              />
              <select
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Tipo de evento
                </option>
                <option value="palestra">Palestra</option>
                <option value="reuniao">Reunião</option>
                <option value="reuniao">Curso</option>
                <option value="workshop">Workshop</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div className="h-full gap-5 flex flex-col">
              <h2 className="font-bold">Data desejada</h2>
              <input
                type="date"
                placeholder="Data desejada"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md placeholder:text-left"
                required
              />

              <div>
                <h2 className="font-bold">Horario de início e fim</h2>
                <div className="flex flex-row">
                  <h3 className="p-3">{" De "}</h3>
                  <input
                    className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
                    type="time"
                    placeholder="Início"
                    required
                  />
                  <h3 className="p-3">{" até as "}</h3>
                  <input
                    className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
                    type="time"
                    placeholder="Fim"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Observações"
                className="shadow-md/40 bg-lightpurple h-20 rounded-md placeholder:text-start px-2"
              />
            </div>
          </div>
          <div className="flex items-center my-4">
            <input
              type="checkbox"
              id="privacyPolicy"
              required
              className="mr-2 accent-turquesa"
            />
            <label htmlFor="privacyPolicy" className="text-sm">
              Li e aceito a{" "}
              <a
                href="/politica-de-privacidade"
                className="underline text-turquesa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Política de Privacidade
              </a>
            </label>
          </div>
          <div className="flex justify-end">
            {success ? (
              <button
                type="button"
                disabled
                className="bg-green-500 text-white px-10 py-5 rounded-3xl cursor-not-allowed flex items-center justify-center"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
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
                Reservar
              </button>
            )}
            {error && <span className="text-red-500 ml-4">{error}</span>}
          </div>
        </form>
      </div>
    </div>
  );
}
