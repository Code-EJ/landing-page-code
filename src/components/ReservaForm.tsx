import BackButton from "./Buttons/BackButton";

interface ReservaFormProps {}

export default function ReservaForm({}: ReservaFormProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bgwhite">
      <div className="bg-white rounded-lg shadow-2xl/90 p-10 w-full max-w-5xl relative">
        <div className="top-2 left-3 p-3">
          {/* Backbutton */}
          <BackButton />

          {/* Texto */}
          <div className="flex flex-row justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-center">
                Formulário de Reserva do Auditório
              </h2>
              <h3 className="text-lg mb-3 text-center font-thin text-sm">
                Reserve nosso auditório para seu evento decolar!
              </h3>
            </div>
          </div>
        </div>

        {/* Forms */}
        <form className="flex flex-col p-5 justify-evenly">
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
              />
              <input
                type="text"
                placeholder="Telefone"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Tipo de evento"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md"
              />
            </div>
            <div className="h-full gap-5 flex flex-col">
              <h2 className="font-bold">Data desejada</h2>
              <input
                type="date"
                placeholder="Data desejada"
                className="shadow-md/40 bg-lightpurple px-4 py-2 rounded-md placeholder:text-left"
              />

              <div>
                <h2 className="font-bold">Horario de início e fim</h2>
                <div className="flex flex-row">
                  <h3 className="p-3">{" De "}</h3>
                  <input
                    className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
                    type="time"
                    placeholder="Início"
                  />
                  <h3 className="p-3">{" até as "}</h3>
                  <input
                    className="shadow-md/40 bg-lightpurple placeholder:text-left p-3"
                    type="time"
                    placeholder="Fim"
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
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-turquesa text-white px-10 py-5 rounded-4xl hover:bg-lightturquesa transition"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
