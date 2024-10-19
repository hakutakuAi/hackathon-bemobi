# 📊 Hackathon Bemobi - Hakutaku AI

![Hakutaku Logo](https://github.com/user-attachments/assets/754ee7ce-a5ca-40d5-8110-381280d4e89c)

O **Hakutaku AI** é um assistente de IA generativa desenvolvido para o **Hackathon Bemobi**, com o objetivo de aumentar a eficiência de equipes, como analistas e Product Owners, ao centralizar informações essenciais sobre assinaturas recorrentes. A plataforma permite respostas rápidas e precisas sobre o comportamento dos assinantes, histórico de pagamentos e tendências de engajamento, consolidando dados fragmentados em uma única interface. Isso facilita a análise de dados e acelera as decisões estratégicas.

## 🚀 Demo da Solução

Aplicação disponível em: [hakutaku-bemobi.vercel.app/](hakutaku-bemobi.vercel.app/)

https://github.com/user-attachments/assets/4928741e-a062-43d1-a17d-439232d6bbf2

A plataforma utiliza tecnologias **open-source** para integrar dados e realizar processamento de linguagem natural, permitindo que os colaboradores façam perguntas diretamente ao sistema, sem a necessidade de codificação ou consultas manuais ao time de **Data Analytics**. Com o **Hakutaku**, é possível responder rapidamente a perguntas sobre o ciclo de vida do assinante, como a taxa de **churn** ou perfil de pagamento recorrente, otimizando o suporte interno e garantindo maior controle sobre as estratégias de retenção e personalização de ofertas.

## 📚 Principais features

-   **Dashboard Web**: Interface intuitiva e responsiva, com gráficos e tabelas interativas para visualização de dados.
-   **IA Generativa**: Respostas automáticas e personalizadas para perguntas sobre assinantes e comportamento de pagamentos.
-   **Extração de Dados**: Integração contínua com **Airbyte** para coleta e processamento
-   **Busca Vetorial**: Consultas otimizadas com **Qdrant** para análise de dados vetoriais e recomendações personalizadas.
-   **Segurança e Privacidade**: Dados sensíveis armazenados localmente, com criptografia e controle de acesso restrito.s
-   **Escalabilidade**: Infraestrutura automatizada com **Pulumi** e **SST**, garantindo alta disponibilidade e baixa latência.
-   **Baixo Custo**: Utilização de serviços locais e open-source para reduzir custos operacionais e manter a eficiência.

## 🎤 Pitch da Solução

[![Vídeo do Pitch](https://img.youtube.com/vi/sxFaeHuzLio/0.jpg)](https://www.youtube.com/watch?v=sxFaeHuzLio)

## 🛠 Arquitetura

![Arquitetura](https://github.com/user-attachments/assets/c22fca78-d285-45d3-8f97-4836ece8edba)

### Componentes Principais:

-   **[CloudFront](https://aws.amazon.com/cloudfront/)** + **[S3](https://aws.amazon.com/s3/)**: Fazem a distribuição rápida do dashboard web, desenvolvido com **[Next.js](https://nextjs.org/)**, permitindo que os colaboradores acessem a plataforma com baixa latência.
-   **[AWS Lambda](https://aws.amazon.com/lambda/)** + **[VPC](https://aws.amazon.com/vpc/)**: Gerenciam as requisições do backend e as consultas aos dados armazenados em bancos como **[RDS](https://aws.amazon.com/rds/)** e serviços locais de **[Qdrant](https://qdrant.tech/)** e **[Airbyte](https://airbyte.com/)**, que possibilitam buscas vetoriais otimizadas e integração contínua de dados.
-   **[Qdrant](https://qdrant.tech/)** + **[Airbyte](https://airbyte.com/)**: Operam localmente para garantir segurança adicional aos dados internos da empresa, mantendo um custo operacional reduzido.
-   **[OpenAI](https://openai.com/)** + **[Cohere](https://cohere.com/)**: Modelos de linguagem usados para enriquecer as respostas às consultas dos colaboradores, otimizando a experiência e melhorando a precisão nas tomadas de decisão.

### Orquestração e Deploy:

A infraestrutura é automatizada com **[Pulumi](https://www.pulumi.com/)** e **[SST](https://sst.dev/)**, facilitando o gerenciamento de recursos na AWS, desde o provisionamento até a configuração dos stacks das empresas. Isso garante a conformidade e eficiência operacional, com processamento seguro dos dados, respostas rápidas e controle de custos.

## 📁 Estrutura do Repositório

-   **`dashboard/`**: Código-fonte do dashboard web desenvolvido em **[Next.js](https://nextjs.org/)**. A aplicação é Fullstack, utilizando **SSR** (Server-Side Rendering) e **API Routes** para comunicação com o backend.
-   **`infrastructure/`**: Scripts para configurar a infraestrutura do **[Qdrant](https://qdrant.tech/)** e **[Airbyte](https://airbyte.com/)** em máquinas virtuais, com setup e configuração básicos.

## ⚙️ Setup Local

### Pré-requisitos

-   Recomendamos o uso de um sistema operacional [Unix](https://en.wikipedia.org/wiki/Unix) (Linux ou macOS), já que os scripts de setup foram desenvolvidos para esses ambientes.
    -   **[Node.js](https://nodejs.org/)** + Algum gerenciador de pacotes **[npm](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
    -   **[Docker](https://www.docker.com/)** + **[Docker Compose](https://docs.docker.com/compose/)**.
    -   **[OpenAI API Key](https://platform.openai.com/docs/guides/authentication)**.
    -   **[Cohere API Key](https://cohere.com/)**.
    -   **[Airbyte API Key](https://docs.airbyte.com/enterprise-setup/api-access-config)**.
    -   **[Qdrant API Key](https://qdrant.tech/documentation/cloud/authentication/)**.

### Passos

Siga os passos abaixo para rodar o projeto localmente:

1. **Clone o repositório:**

    ```bash
    git clone git@github.com:hakutakuAi/hackathon-bemobi.git
    ```

2. **Acesse o diretório do projeto:**

    ```bash
    cd hackathon-bemobi
    ```

3. **Configure a infraestrutura local:**

    ```bash
    cd infrastructure
    chmod +x setup.sh
    ./setup.sh
    ```

4. **Instale as dependências do dashboard:**

    ```bash
    cd dashboard
    npm install
    ```

5. **Configure as variáveis de ambiente:**

    Copie o arquivo de exemplo `.env` e preencha as informações necessárias:

    ```bash
    cp .env.example .env.local
    ```

6. **Execute o dashboard localmente:**

    ```bash
    npm run dev
    ```

    Agora você pode acessar o dashboard em `http://localhost:3000` 🎉
