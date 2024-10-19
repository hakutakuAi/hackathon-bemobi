'use client';

import { memo, useState, useEffect } from 'react';
import Image from 'next/image';
import { Handle, Position, NodeResizer } from '@xyflow/react';
import { GrSend } from 'react-icons/gr';
import LoadingIcon from "@/assets/iconLoading.png"; // Verifique se o caminho está correto
import { useChat } from 'ai/react'; // Certifique-se de que o hook está importado corretamente

const TextNode = ({ data }: any) => {
  const [inputValue, setInputValue] = useState('');
  const { messages, append, isLoading } = useChat();
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(100);
  const [inputVisible, setInputVisible] = useState(true);
  const [showLoading, setShowLoading] = useState(false); // Novo estado para controlar a exibição do ícone de carregamento

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoading(true); // Exibir ícone de carregamento imediatamente
    setInputVisible(false); // Ocultar o input imediatamente

    // Enviar mensagem e obter resposta da IA
    await append({ content: inputValue, role: 'user' });

    // Limpar o input após o envio
    setInputValue('');
  };

  const lastAIMessage = messages.slice().reverse().find(msg => msg.role === 'assistant');

  useEffect(() => {
    // Quando isLoading mudar para falso, esconder o ícone de carregamento
    if (!isLoading && showLoading) {
      setShowLoading(false);
    }
  }, [isLoading, showLoading]);

  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        padding: '1px',
        border: '1px solid #555',
        borderRadius: '5px',
        background: '#fff',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NodeResizer
        minWidth={100}
        minHeight={50}
        isVisible={true}
        onResize={(evt, { width, height }) => {
          setWidth(width);
          setHeight(height);
        }}
      />

      <div style={{ flex: 1, overflow: 'hidden', padding: '5px' }}>
        {showLoading && (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {/* Verifique se a imagem de carregamento está no caminho correto */}
            <Image src={LoadingIcon} alt="Loading..." width={24} height={24} /> 
          </div>
        )}
        {!showLoading && lastAIMessage && (
          <div style={{ textAlign: 'left', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <span>{lastAIMessage.content}</span>
          </div>
        )}
      </div>

      {inputVisible && (
        <form onSubmit={handleSubmit} style={{ marginTop: '0px' }} className='flex items-center flex-col gap-y-2'>
          <input 
            className='border rounded-3xl border-[#FF791F]'
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Digite algo..."
            style={{
              width: '100%',
              padding: '5px',
              boxSizing: 'border-box',
            }}
          />
          <button
            type="submit"
            className='p-3 bg-gradient-to-r from-[#FF791F] to-[#FF5300] text-white rounded-full shadow-md hover:from-[#FF5A00] hover:to-[#FF3200] transition-all duration-300 flex text-center justify-center'
            style={{
              width: '48px',
              height: '48px',
              marginLeft: '10px',
            }}
          >
            <GrSend size={24} />
          </button>
        </form>
      )}

      <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  );
};

export default memo(TextNode);
