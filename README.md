# Evento Presença

Este é um aplicativo React Native para gerenciar participantes de eventos. Ele permite adicionar e remover participantes de uma lista de presença, além de exibir o nome e a data do evento.

## Funcionalidades

- Exibe o nome e a data do evento.
- Permite adicionar participantes à lista de presença.
- Verifica se o participante já está na lista.
- Permite remover participantes da lista.
- Exibe uma mensagem caso a lista de participantes esteja vazia.

## Pré-requisitos

Antes de começar, certifique-se de ter o ambiente de desenvolvimento do React Native configurado:

1. [Instalar o Node.js](https://nodejs.org/)
2. [Instalar o React Native CLI](https://reactnative.dev/docs/environment-setup)
3. [Instalar o Android Studio ou Xcode](https://reactnative.dev/docs/environment-setup)

## Instalação

Siga as etapas abaixo para instalar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/evento-presenca.git

2. Navegue até o diretório do projeto:
    cd evento-presenca

3. Instale as dependências:
    npm install

4. Rodar a aplicação:
    npx expo start

5. Scanear o QR Code no celular pelo app Expo Go

## Detalhes do Código
- App.tsx: Define o componente principal que exibe a tela inicial e configura a StatusBar.
- Home.tsx: Tela principal do evento. Aqui o nome do evento é exibido, a data é formatada e os participantes podem ser adicionados ou removidos.
- Participant.tsx: Exibe cada participante na lista de presença e permite removê-los.
- styles.ts: Contém os estilos utilizado que foi criado para cada componente.

## Exemplo de Uso
Ao iniciar o aplicativo, você verá o nome do evento que pode ser alterado e a data atual. Você pode adicionar participantes digitando seus nomes no campo de entrada e pressionando o botão de adição (+). Para remover um participante, basta pressionar o botão de remoção (-) ao lado do nome e confirmar a remoção do nome.