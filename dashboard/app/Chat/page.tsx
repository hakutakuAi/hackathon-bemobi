'use client';

import { useState } from 'react';
import { useChat } from 'ai/react'; // Importando o hook useChat
import Sidebar from '../components/Sidebar';
import Image from 'next/image';  
import openBar from '@/app/assets/openBar.svg'; 
import closeBar from '@/app/assets/closeBar.svg'; 

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="chat-container flex flex-col h-full">
      <div className="flex-1 overflow-y-auto max-h-[400px] mt-2"> {/* Área de mensagens */}
        {messages.map(m => (
          <div key={m.id} className={`message ${m.role}`}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex items-center border-t border-gray-300 pt-2"> {/* Flexbox para a barra de entrada */}
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Diga algo..."
          className="flex-1 border p-2 rounded-l" // Campo de entrada
        />
        <button 
          type="submit" 
          className="p-2 bg-blue-600 text-white rounded-r" // Estilo do botão de enviar
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-[#EDE9E2] min-h-screen items-center font-[family-name:var(--font-geist-sans)] relative">
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-10 p-2 bg-gray-800 text-white rounded"
          onClick={toggleSidebar}
        >
          <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
        </button>
      )}

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main className={`flex-1 items-start p-10 px-40 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
        <p>Lugli safado</p>

        <Chat />
      </main>
    </div>
  );
};

export default Home;
