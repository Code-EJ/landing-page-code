// import BackButton from "../Buttons/BackButton"
import SubmitButton from "../components/ReservaForm/SubmitButton";
import FormHeader from "../components/ReservaForm/FormHeader";
import DadosEvento from "../components/ReservaForm/DadosEvento";
import DadosPessoais from "../components/ReservaForm/DadosPessoais";
import PoliticaDePrivacidade from "../components/ReservaForm/PoliticaDePrivacidade";

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
        <form onSubmit={handleSubmit}>
          <FormHeader />
          <div className="flex flex-row justify-evenly">
            <DadosPessoais />
            <DadosEvento />
          </div>
          <PoliticaDePrivacidade />
          <SubmitButton
            loading={loading}
            success={success}
            error={error ?? undefined}
          />
        </form>
      </div>
    </div>
  );
}
