'use client';


import { memo, useState } from 'react';
import { Handle, Position, NodeResizer } from '@xyflow/react';
import { GrSend } from 'react-icons/gr'


const TextNode = ({ data }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Estados para controlar o redimensionamento
  const [width, setWidth] = useState(150);
  const [height, setHeight] = useState(100);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResponse(`${inputValue}`);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        width: `${width}px`,   // Largura dinâmica
        height: `${height}px`,  // Altura dinâmica
        padding: '5px',
        border: '1px solid #555',
        borderRadius: '5px',
        background: '#fff',
        textAlign: 'center',
        overflow: 'hidden',  
        whiteSpace: 'nowrap',    
        textOverflow: 'ellipsis' ,
        display: 'block'    
      }}
    >
      {/* NodeResizer para redimensionamento */}
      <NodeResizer
        minWidth={100}
        minHeight={50}
        isVisible={true}
        onResize={(evt, { width, height }) => {
          setWidth(width);
          setHeight(height);
        }}
      />

      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ height: '100%' }} className='items-center text-center w-full flex flex-col border-[#FF791F]'>
                  <input 
            className='border boder-1 rounded-3xl border-[#FF791F]'
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Digite algo..."
            style={{
              width: '100%',
              padding: '5px',
              marginBottom: '10px',
              boxSizing: 'border-box', 
            }}
          />
          <button
							type="submit"
							className={'p-3 bg-gradient-to-r items-center w-full from-[#FF791F] to-[#FF5300] text-white rounded-full shadow-md hover:from-[#FF5A00] hover:to-[#FF3200] transition-all duration-300 flex text-center justify-center'}
							style={{
								width: '48px',
                height: '48px',
                
							}}
						>
							<GrSend size={48} />
						</button>
        </form>
      ) : (
        <div
          style={{
            height: '100%',
              overflowY: 'auto',
              background: '#fff',
              textAlign: 'center',
              overflow: 'hidden',  // Garante que o conteúdo não saia da div
              whiteSpace: 'wrap', // Não permite quebra de linha
              textOverflow: 'ellipsis', // Aplica reticências ao texto que não cabe
                    
                  }}
                >
          {response}
        </div>
      )}

      {/* Handles do React Flow */}
      <Handle type="source" position={Position.Left} style={{ opacity: 0 }} />
      <Handle type="target" position={Position.Right} style={{ opacity: 0 }} />
    </div>
  );
};

export default memo(TextNode);
