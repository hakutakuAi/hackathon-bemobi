'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import { FaUser } from 'react-icons/fa'; // Exemplo usando um ícone de usuário
import { FaGoogleDrive, FaGithub, FaSlack } from 'react-icons/fa'; // Ícones de Drive, GitHub e Slack
import openBar from '@/assets/openBar.svg'
import { SiGooglesheets } from 'react-icons/si';
import Logo from '@/assets/logo.svg'
import Chat from '@/components/Chat'
import Charts from '@/components/Chart';
import DotPattern from '@/components/ui/dot-pattern'
import { cn } from '@/lib/utils'
import Card from '@/components/Card'

interface Integration {
    connectionId: string;
    name: string;
    status: string;
    source: { name: string; sourceType: string };
    destination: { name: string; destinationType: string };
    schedule: { basicTiming: string };
  }

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [integrations, setIntegrations] = useState<Integration[]>([]);
    const [hoveredIntegrationId, setHoveredIntegrationId] = useState<string | null>(null); // Para controlar qual conector está "focado"
    useEffect(() => {
        const fetchIntegrations = async () => {
          try {
            const response = await fetch('http://localhost:3000/api/integrations/connections');
            const data = await response.json();
            setIntegrations(data);
          } catch (error) {
            console.error('Erro ao buscar integrações:', error);
          }
        };
    
        fetchIntegrations();
      }, []);

	const toggleSidebar = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="relative flex min-h-screen bg-[#EDE9E2] font-[family-name:var(--font-geist-sans)] overflow-hidden">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<DotPattern width={20} height={20} cx={1} cy={1} cr={1} className={cn('[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.6))]', 'opacity-60')} />
			</div>
			{!isOpen && (
				<div className="fixed top-4 left-4 z-20 flex items-center">
					<button className="p-2 text-black rounded" onClick={toggleSidebar}>
						<div className="flex flex-row">
							<Image src={openBar} alt="Abrir Menu" width={24} height={24} />
							<Image src={Logo} alt="Logo" width={70} height={70} />
						</div>
					</button>
				</div>
			)}

			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

			<main className={`flex-1 flex flex-row relative z-10 overflow-hidden transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
                      <div className="flex items-center">
      <aside className="w-64 bg-[#B24128] text-white p-4 pt-20 h-screen">
        <h3 className="text-lg font-bold mb-6">Conectores</h3>
        <div className="space-y-6">
          {integrations.map((integration) => (
            <div
              key={integration.connectionId}
              className="flex flex-col space-y-2"
              onMouseEnter={() => setHoveredIntegrationId(integration.connectionId)} // Quando o mouse passa por cima
              onMouseLeave={() => setHoveredIntegrationId(null)} // Quando o mouse sai de cima
            >
              <div className="flex items-center space-x-2">
                {integration.source.sourceType === 'google-sheets' ? (
                  <SiGooglesheets size={24} />
                ) : (
                  <FaGoogleDrive size={24} />
                )}
                <span>{integration.name}</span>
              </div>
              <span className="text-sm">Status: {integration.status}</span>

              {/* Mostrar detalhes se o conector estiver focado */}
              {hoveredIntegrationId === integration.connectionId && (
                <div className="mt-2 p-2 bg-gray-700 rounded text-sm">
                  <p>
                    <strong>Fonte:</strong> {integration.source.name} ({integration.source.sourceType})
                  </p>
                  <p>
                    <strong>Destino:</strong> {integration.destination.name} ({integration.destination.destinationType || 'N/A'})
                  </p>
                  <p>
                    <strong>Sincronização:</strong> {integration.schedule.basicTiming}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </div>

      <div className="flex-1 p-10">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Buscas Diárias</h3>
            <p className="text-3xl">1,234</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Buscas Semanais</h3>
            <p className="text-3xl">8,456</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-bold mb-4">Buscas Mensais</h3>
            <p className="text-3xl">32,891</p>
          </div>
        </section>

 
      </div>
			</main>
		</div>
	)
}

export default Home
