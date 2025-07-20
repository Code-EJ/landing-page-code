import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

interface BackButtonProps {
  routeName?: string;
  onClick?: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ routeName, onClick }) => {
  const navigate = useNavigate();

  const handlePress = () => {
    if (onClick) {
      onClick();
    } else if (routeName) {
      navigate(routeName);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handlePress}
      className="mr-2 flex items-center text-black hover:underline"
    >
      <IoArrowBack className="text-black text-xl" />
      <span className="ml-2 text-base">Voltar</span>
    </button>
  );
};

export default BackButton;
