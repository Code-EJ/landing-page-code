import React from "react";

const PoliticaDePrivacidade: React.FC = () => (
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
);

export default PoliticaDePrivacidade;
