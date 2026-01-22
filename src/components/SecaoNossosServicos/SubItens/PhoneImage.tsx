import telefoneImg from "../../../assets/telefone.png";

const PhoneImage = () => (
  <div className="flex justify-center">
    {telefoneImg ? (
      <img
        src={telefoneImg}
        alt="Celular"
        className="w-auto md:w-auto"
        style={{ maxHeight: "450px", height: "auto", maxWidth: "100%" }}
      />
    ) : (
      <div className="text-gray-400">Imagem não disponível</div>
    )}
  </div>
);

export default PhoneImage;
