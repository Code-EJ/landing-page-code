import logoLinkedIn from "../assets/linkedin.png";
import logoInstagram from "../assets/instagram.png";
import logoCode from "../assets/logo-code.png";

export default function Footer() {

  return (
    <footer>
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
