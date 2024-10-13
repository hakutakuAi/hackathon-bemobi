'use client';

import { useState } from 'react';
import { useChat } from 'ai/react';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';  
import openBar from '@/app/assets/openBar.svg'; 
import closeBar from '@/app/assets/closeBar.svg'; 

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="chat-container flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto mt-2">
        {messages.map(m => (
          <div key={m.id} className={`message ${m.role} text-black`}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>

      {/* Form always at the bottom */}
      <form onSubmit={handleSubmit} className="border border-[#FF791F] rounded-3xl flex w-full bg-none">
        <div className="flex items-center justify-between px-4 w-full bg-none " >
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Diga algo..."
            className="flex-1 border p-4 rounded-lg  text-black bg-[#EDE9E2] focus:outline-none focus:border-gray-300"
            style={{ width: '80%' }}
          />
          <button 
            type="submit" 
            className="p-4 bg-amber-700 text-black rounded-3xl"
          >
            Enviar
          </button>
        </div>
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
    <div className="flex bg-[#EDE9E2] min-h-screen font-[family-name:var(--font-geist-sans)] relative">
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-10 p-2 bg-gray-800 text-black rounded"
          onClick={toggleSidebar}
        >
          <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
        </button>
      )}

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main className={`flex-1 p-10 w-full transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} flex flex-col`}>
        <p>logo</p>
        
        {/* Chat component */}
        <div className="flex flex-col h-full justify-between">
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default Home;