'use client';

import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';  // Certifique-se de que o componente Image do Next.js está sendo importado
import openBar from '@/app/assets/openBar.svg'; // O caminho correto para seu ícone
import closeBar from '@/app/assets/closeBar.svg'; // O ícone de fechar também

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-[#EDE9E2] min-h-screen font-[family-name:var(--font-geist-sans)] relative">
      {/* Botão de abrir quando a sidebar está fechada */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-10 p-2 bg-gray-800 text-white rounded"
          onClick={toggleSidebar}
        >
          <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
        </button>
      )}

      {/* Sidebar é usada como componente */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Conteúdo principal */}
      <main className={`flex-1 p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <h1 className="text-4xl font-bold">Home Page</h1>
        <p className="mt-4">
          Bem-vindo à sua dashboard!
        </p>
      </main>
    </div>
  );
};

export default Home;
