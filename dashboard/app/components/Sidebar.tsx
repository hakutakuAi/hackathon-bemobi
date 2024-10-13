import Image from 'next/image';
import closeBar from '@/app/assets/closeBar.svg';
import openBar from '@/app/assets/openBar.svg';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen p-5 bg-[#B24128] text-white transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64 z-20`} // Garantir que z-index seja maior que o conteúdo principal
    >
      {/* Botão de abrir/fechar dentro da sidebar */}
      <div className="flex justify-end">
        {isOpen ? (
          <button onClick={toggleSidebar} className="p-2">
            <Image src={closeBar} alt="Fechar Menu" width={24} height={24} />
          </button>
        ) : (
          <button onClick={toggleSidebar} className="p-2">
            <Image src={openBar} alt="Abrir Menu" width={24} height={24} />
          </button>
        )}
      </div>

      {/* Conteúdo da sidebar */}
      {isOpen && (
        <div className="mt-8">
          <div className="text-2xl font-bold mb-8">Menu</div>
          <ul className="space-y-4">
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </a>
            </li>
            {/* Outros itens de menu */}
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
