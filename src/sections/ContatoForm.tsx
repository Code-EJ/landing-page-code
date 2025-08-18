import { useState } from "react";
import { send } from "@emailjs/browser";
import DadosContato from "../components/ContatoForm/DadosContato";
import PoliticaDePrivacidade from "../components/ReservaForm/PoliticaDePrivacidade";
import ContatoFormHeader from "../components/ContatoForm/ContatoFormHeader";
import ContatoSubmitButton from "../components/ContatoForm/ContatoSubmitButton";

export default function ContatoForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

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
          email,
          telefone,
          mensagem
        },
        "ZUTIYrrCnJDBaM_WO"
      );

      setSuccess(true);
      setNome("");
      setEmail("");
      setTelefone("");
      setMensagem("");
      window.location.href = "/confirmacaoModal";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro");
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
            <div className="w-full">
              <DadosContato
                nome={nome} setNome={setNome}
                email={email} setEmail={setEmail}
                telefone={telefone} setTelefone={setTelefone}
                mensagem={mensagem} setMensagem={setMensagem}
              />
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
