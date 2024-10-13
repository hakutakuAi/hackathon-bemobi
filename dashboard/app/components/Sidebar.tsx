import { FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Importar apenas os ícones desejados
import Image from 'next/image';
import closeBar from '@/app/assets/closeBar.svg';
import openBar from '@/app/assets/openBar.svg';
import Logo from "@/app/assets/logo.svg"; // Substitua pela sua logo

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen p-5 bg-[#B24128] text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 z-20 overflow-y-auto`} // Usar overflow-y-auto para permitir rolagem quando necessário
    >
      {/* Container para a logo e botão de abrir/fechar */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="flex flex-row justify-center w-full items-center">
          <Image src={Logo} alt="Logo" width={80} height={80} className="mr-5" />
          {/* Botão de abrir/fechar dentro da sidebar */}
          <button onClick={toggleSidebar} className="p-2">
            {isOpen ? (
              <Image src={closeBar} alt="Fechar Menu" width={24} height={24} />
            ) : (
              <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
            )}
          </button>
        </div>
      </div>

      {/* Conteúdo da sidebar */}
      {isOpen && (
        <div className="flex flex-col justify-between h-4/5 mt-8">
          {/* Parte superior da sidebar */}
          <div className="flex flex-col items-center">
            <div className="text-xl text-black border-r-4 border-black border-b-4 mb-8 p-4 bg-[#D9D9D9] rounded-3xl">Nova conversa</div>
            <ul className="space-y-4">
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                  Dashboard
                </a>
              </li>
              {/* Outros itens de menu */}
            </ul>
          </div>

          {/* Parte inferior da sidebar */}
          <div className="flex flex-col items-center space-y-4 pb-4">
            <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
              <FaQuestionCircle className="h-5 w-5 mr-2" />
              Help
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
              <FaCog className="h-5 w-5 mr-2" />
              Settings
            </a>
            <a href="#" className="flex items-center py-2 px-4 rounded hover:bg-gray-700">
              <FaSignOutAlt className="h-5 w-5 mr-2" />
              Logout
            </a>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
