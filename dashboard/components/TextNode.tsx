import { memo, useState } from 'react';
import { Handle, Position } from '@xyflow/react';

const TextNode = ({ data }: any) => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState('');
  const [submitted, setSubmitted] = useState(false); // Controle do estado do envio

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Gera a resposta com base no input
    setResponse(`${inputValue}`);
    setSubmitted(true); // Oculta o input após envio
  };

  return (
    <div style={{
      padding: '10px',
      border: '1px solid #555',
      borderRadius: '5px',
      background: '#fff',
      textAlign: 'center',
      minWidth: '150px',
    }}>
      {!submitted ? ( 
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Digite algo..."
            style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
          />
          <button type="submit" style={{ padding: '5px 10px' }}>Enviar</button>
        </form>
      ) : (
        <div>{response}</div>
      )}

    </div>
  );
};

export default memo(TextNode);
