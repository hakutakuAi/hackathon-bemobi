# hackathon-bemobi

## Pitch deck
[![Video do pitch](https://img.youtube.com/vi/vDbem3bAJi8/0.jpg)](https://www.youtube.com/watch?v=vDbem3bAJi8)]

## Demo da solução deployada
https://github.com/user-attachments/assets/be1946e1-1750-417c-a43e-6aab803be166

![image](https://github.com/user-attachments/assets/754ee7ce-a5ca-40d5-8110-381280d4e89c)

O projeto da Hakutaku no hackathon da Bemobi tem como objetivo melhorar a eficiência dos colaboradores, como analistas e Product Owners, centralizando informações essenciais sobre assinaturas recorrentes em um assistente de IA generativa. Em vez de depender de múltiplas fontes de dados fragmentadas, como bancos de dados internos e externos, a Hakutaku consolida essas informações em um único lugar, oferecendo respostas rápidas e precisas para consultas comuns sobre o comportamento dos assinantes, histórico de pagamentos e engajamento. Isso facilita a análise de dados e a tomada de decisões estratégicas de forma mais ágil.

A plataforma utiliza tecnologias open-source para integração de dados e processamento de linguagem natural, permitindo que os colaboradores façam perguntas diretamente ao sistema sem a necessidade de codificação ou consulta manual a ferramentas ou ao time de Data Analytics. Dessa forma, os profissionais podem responder rapidamente a questões sobre o ciclo de vida do assinante, como taxa de churn ou perfil de pagamento recorrente, otimizando o suporte interno e garantindo maior controle sobre as estratégias de retenção e ofertas personalizadas.

# Arquitetura

![image](https://github.com/user-attachments/assets/c22fca78-d285-45d3-8f97-4836ece8edba)


# Estrutura de Pastas

### app/
- **Admin/**: Diretório para funcionalidades da pagina administrativa.
- **api/**: Arquivos relacionados a chamadas de API.
- **Chat/**: Arquivos da pagina de chat
  - **page.tsx**: Página principal do chat.
- **fonts/**: Armazena fontes utilizadas no projeto.


### assets/
- **icons/**: Contém ícones e imagens.
  - **Avatar.svg**, **closeBar.svg**, **openBar.svg**, etc.

### clients/
- **airbyte/**: Relacionado ao cliente Airbyte.
  - **api/**: Arquivos de API para Airbyte.
  - **model/**: Modelos de dados.

### components/
- **ui/**: Componentes de interface do usuário.
  - **Card.tsx**: Componente de card.
  - **Chart.tsx**: Componente de gráficos.
  - **Chat.tsx**: Componente de chat.
  - **Sidebar.tsx**: Componente de barra lateral.
