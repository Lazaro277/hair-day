# Hair Day

Aplicação web para gerenciamento de agendamentos em um salão de beleza. O Hair Day permite visualizar os horários disponíveis, realizar novos agendamentos e cancelar horários existentes.

O projeto foi desenvolvido com foco na prática de desenvolvimento web, integração com API REST e manipulação de dados assíncronos.

## Funcionalidades

- Visualização dos agendamentos por data.
- Consulta dos horários disponíveis.
- Identificação de horários ocupados e indisponíveis.
- Criação de novos agendamentos.
- Cancelamento de agendamentos existentes.
- Atualização automática da lista após operações.
- Validação de campos e tratamento de erros nas requisições.

## Tecnologias utilizadas

- **HTML5** — estrutura da aplicação.
- **CSS3** — estilização e responsividade.
- **JavaScript** — lógica e interatividade.
- **Webpack** — empacotamento e ambiente de desenvolvimento.
- **Day.js** — manipulação e formatação de datas.
- **JSON Server** — simulação de uma API REST para armazenamento dos agendamentos.
- **Fetch API** — comunicação entre o front-end e a API.

## Como executar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- npm (incluído na instalação do Node.js).
- Git instalado.

### 1. Clone o repositório

```bash
git clone https://github.com/Lazaro277/hair-day.git
```

Entre na pasta do projeto:

```bash
cd hair-day
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie a API

Em um terminal, execute:

```bash
npm run server
```

A API será disponibilizada em:

```text
http://localhost:3333
```

Os agendamentos podem ser consultados pelo endpoint:

```text
http://localhost:3333/schedules
```

### 4. Inicie o front-end

Abra um segundo terminal, dentro da pasta do projeto, e execute:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

**Importante:** mantenha os dois terminais em execução enquanto estiver utilizando a aplicação. O front-end depende da API para consultar, criar e cancelar agendamentos.

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run server` | Inicia a API local com JSON Server. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |

## Estrutura do projeto

```text
hair-day/
├── src/
│   ├── assets/          # Imagens e ícones
│   ├── modules/         # Módulos e funcionalidades
│   │   ├── form/        # Formulário e seleção de horários
│   │   └── schedules/   # Exibição e gerenciamento de agendamentos
│   ├── services/        # Comunicação com a API
│   ├── styles/          # Arquivos CSS
│   ├── utils/           # Funções e configurações auxiliares
│   └── main.js          # Ponto de entrada da aplicação
├── server.json          # Dados utilizados pela API local
├── index.html
├── package.json
├── webpack.config.js
└── README.md
```

## API e armazenamento

O projeto utiliza o JSON Server para simular uma API REST.

Os dados dos agendamentos são armazenados localmente no arquivo `server.json`. Dessa forma, não é necessário configurar um banco de dados externo para executar a aplicação.

A comunicação entre o front-end e a API é realizada por requisições HTTP, utilizando os métodos:

- `GET` — consulta os agendamentos.
- `POST` — cria novos agendamentos.
- `DELETE` — cancela agendamentos.

## Autor

Desenvolvido por **Lázaro Messias**.

- [GitHub](https://github.com/Lazaro277)
- [LinkedIn](https://www.linkedin.com/in/lazaro-messias)
