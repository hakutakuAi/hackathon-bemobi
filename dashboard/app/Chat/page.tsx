'use client';

import { useState, useEffect } from 'react';
import { useChat } from 'ai/react';
import Sidebar from '../components/Sidebar';
import Image from 'next/image';
import openBar from '@/app/assets/openBar.svg';
import Send from '../assets/icons/send';
import Logo from "@/app/assets/logo.svg";
import closeBar from '@/app/assets/closeBar.svg';
import userIcon from '@/app/assets/Avatar.svg';
import chatIcon from '@/app/assets/HKTK-R02_AVATAR-FACE-01.png';
import chatIconThinking from '@/app/assets/HKTK-R02_AVATAR-FACE-BUSCA.png';

const loadingMessages = [
  "Pensando com carinho...",
  "Colocando as ideias no lugar...",
  "Consultando minha bola de cristal...",
  "Fazendo mágica nos bastidores..."
];

const getRandomLoadingMessage = () => {
  return loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
};

const Chat = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [displayMessages, setDisplayMessages] = useState([]);

  useEffect(() => {
    const processedMessages = messages.reduce((acc, message, index) => {
      if (message.role === 'assistant' && message.content === '' && message.toolInvocations) {
        const nextMessage = messages[index + 1];
        if (!nextMessage || nextMessage.role !== 'assistant' || nextMessage.content === '') {
          acc.push({
            ...message,
            isLoading: true,
            loadingMessage: getRandomLoadingMessage(),
            toolName: message.toolInvocations[0].toolName
          });
        }
      } else {
        acc.push(message);
      }
      return acc;
    }, []);

    setDisplayMessages(processedMessages);
  }, [messages]);

  return (
    <div className="chat-container px-40 flex flex-col h-full w-full">
      <div className="flex-1 overflow-y-auto mt-2">
        {displayMessages.map((m, index) => (
          <div
            key={m.id}
            className={`message ${m.role === 'user' ? 'justify-end' : 'justify-start'} flex mb-2 items-center`}
          >
            {m.role === 'assistant' && (
              <Image src={m.isLoading ? chatIconThinking : chatIcon} alt="Chat Icon" width={130} height={130} className="mr-2" />
            )}
            <div
              className={`p-3 rounded-lg ${
                m.role === 'user' ? 'bg-[#D5CCC9] text-black' : 'bg-none text-black'
              } max-w-xs`}
            >
              {m.isLoading ? (
                <span className="italic">
                  {m.loadingMessage}
                </span>
              ) : (
                m.content
              )}
            </div>
            {m.role === 'user' && (
              <Image src={userIcon} alt="User Icon" width={30} height={30} className="ml-2" />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="border border-[#FF791F] rounded-3xl flex w-full bg-none">
        <div className="flex items-center justify-between px-4 w-full bg-none">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Diga algo..."
            className="flex-1 border p-4 rounded-lg text-black bg-[#EDE9E2] focus:outline-none focus:border-none"
            style={{ width: '80%' }}
          />
          <button
            type="submit"
            className="p-1 bg-[#FF791F] text-black rounded-3xl"
          >
            <Send />
          </button>
        </div>
      </form>
    </div>
  );
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-[#EDE9E2] min-h-screen font-[family-name:var(--font-geist-sans)] relative">
      {!isOpen && (
        <div className="fixed top-4 left-4 z-10 flex items-center">
          <button
            className="p-2 text-black rounded"
            onClick={toggleSidebar}
          >
            <div className='flex flex-row'>
              <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
              <Image src={Logo} alt="Logo" width={70} height={70} />
            </div>
          </button>
        </div>
      )}

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <main className={`flex-1 p-10 w-full transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'} flex flex-col`}>
        <div className="flex flex-col h-full justify-between">
          <Chat />
        </div>
      </main>
    </div>
  );
};

export default Home;
