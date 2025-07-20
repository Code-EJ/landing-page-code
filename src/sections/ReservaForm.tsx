import SubmitButton from "../components/ReservaForm/SubmitButton";
import FormHeader from "../components/ReservaForm/FormHeader";
import DadosEvento from "../components/ReservaForm/DadosEvento";
import DadosPessoais from "../components/ReservaForm/DadosPessoais";
import PoliticaDePrivacidade from "../components/ReservaForm/PoliticaDePrivacidade";
import { useState } from "react";

interface ReservaFormProps { }

export default function ReservaForm({ }: ReservaFormProps) {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-2 sm:px-4">
      <div className="bg-white rounded-lg shadow-2xl px-4 sm:px-6 md:px-8 py-6 sm:py-10 w-full max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormHeader />

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <DadosPessoais />
            </div>
            <div className="w-full md:w-1/2">
              <DadosEvento />
            </div>
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
