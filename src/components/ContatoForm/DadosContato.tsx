interface DadosContatoProps {
  nome: string;
  setNome: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  telefone: string;
  setTelefone: (v: string) => void;
  mensagem: string;
  setMensagem: (v: string) => void;
}

export default function DadosContato({
  nome, setNome,
  email, setEmail,
  telefone, setTelefone,
  mensagem, setMensagem
}: DadosContatoProps) {
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Seu nome"
        className="border px-4 py-2 rounded-md"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Seu e-mail"
        className="border px-4 py-2 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        className="border px-4 py-2 rounded-md"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
      />
      <textarea
        placeholder="Mensagem"
        className="border px-4 py-2 rounded-md"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        required
      />
    </div>
  );
}
