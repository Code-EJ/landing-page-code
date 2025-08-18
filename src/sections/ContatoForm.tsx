import DadosContato from "../components/ContatoForm/DadosContato";
import PoliticaDePrivacidade from "../components/ReservaForm/PoliticaDePrivacidade";
import { useState } from "react";
import ContatoFormHeader from "../components/ContatoForm/ContatoFormHeader";
import ContatoSubmitButton from "../components/ContatoForm/ContatoSubmitButton";

interface ContatoFormProps { }

export default function ContatoForm({ }: ContatoFormProps) {
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
          <ContatoFormHeader />

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full ">
              <DadosContato />
            </div>
          </div>

          <PoliticaDePrivacidade />

          <ContatoSubmitButton
            loading={loading}
            success={success}
            error={error ?? undefined}
          />
        </form>
      </div>
    </div>
  );
}
