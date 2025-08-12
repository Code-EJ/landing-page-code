import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLinkedIn from "../assets/linkedin.png";
import logoInstagram from "../assets/instagram.png";
import logoCode from "../assets/logo-code.png";

export default function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Contato");
  };
  return (
    <footer>
      <div
        className="bg-turquesa w-screen h-80 space-x-10"
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="color-violet-950 font-bold text-[60px]">
          Venha tirar suas dúvidas conosco!
        </h1>
        <p className="color-violet-950 text-[25px]">
          Está pronto para transformar suas ideias em soluções reais? Vamos
          começar juntos!
        </p>
        <button
          style={{
            color: isHovered ? "#233D37" : "white",
            backgroundColor: isHovered ? "#41E0B8" : "#233D37",
            textDecoration: isHovered ? "underline" : "none",
            transition: "color 0.3s ease",
            padding: "20px",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          className="justify-center font-bold text-lg rounded-3xl "
        >
          Contate-nos!
        </button>
      </div>
      <div className="w-screen h-40 bg-violet-950 flex p-10 shadow-lg space-x-10 justify-between items-center">
        <div className="flex space-x-6 items-center">
          <a href="https://www.linkedin.com/in/codeejr/">
            <img
              src={logoLinkedIn}
              alt="LinkedIn"
              className="h-15 rounded-full"
            />
          </a>
          <a href="https://www.instagram.com/code.ejr?igsh=MWlxcDJseGNteGdxbw==">
            <img
              src={logoInstagram}
              alt="Instagram"
              className="h-15 rounded-full"
            />
          </a>
        </div>
        <div className="space-y-3 ">
          <img
            src={logoCode}
            alt="Logo Code[]"
            style={{
              width: "50%",
              height: "50%",
            }}
          />
          <p className="italic text-white text-sm">
            © 2025 Code Soluções em Tecnologia Júnior.
            <br /> Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
