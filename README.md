# Event Mapper

Este é um aplicativo de mapeamento de eventos que permite que usuários cadastrem e visualizem eventos em um mapa.

## Funcionalidades

- Mapa com localização atual do usuário e marcadores para eventos
- Cadastro de novos eventos através de formulário
- Visualização de detalhes de eventos cadastrados
- Deleção de eventos cadastrados

## Tecnologias utilizadas

- React
- TypeScript
- Google Maps API

## Instalação

1. Clone este repositório
2. Instale as dependências usando `npm install`
3. Crie um arquivo `.env` na raiz do projeto e adicione a chave da API do Google Maps em `GOOGLE_MAPS_API_KEY`
4. Inicie o aplicativo usando `npm start`

## Como usar

ATÇ: esta aplicação necessita do event-service (https://github.com/AdrielHigor/event-service) para funcionar corretamente.

1. Permita que o aplicativo acesse a sua localização atual quando solicitado
2. Clique em um ponto do mapa para cadastrar um novo evento
3. Preencha o formulário de cadastro de eventos com as informações necessárias e clique em "Salvar"
4. Clique em um marcador de evento existente para visualizar seus detalhes
5. Clique em "Deletar" dentro dos detalhes do evento para removê-lo do mapa
