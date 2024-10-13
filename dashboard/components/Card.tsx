import { FaUser } from 'react-icons/fa'; // Exemplo usando um ícone de usuário
import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-1 bg-white rounded-lg shadow-md w-40 h-40 hover:shadow-lg transition-shadow">
      {/* Ícone do Card */}
      <div className="text-5xl text-[#B24128] mb-2">
        {icon}
      </div>
      {/* Título abaixo do ícone */}
      <div className="text-xl font-semibold text-gray-800">
        {title}
      </div>
    </div>
  );
};


export default Card;
