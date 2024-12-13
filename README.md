# Teste de Sanidade - Tela de Login

Este repositório contém um teste de sanidade implementado com Jest para validar o funcionamento básico de uma tela de login.

## O que é um Teste de Sanidade?

O teste de sanidade é um tipo de teste de software utilizado para verificar rapidamente se uma funcionalidade específica ou um pequeno conjunto de funcionalidades de um sistema estão funcionando corretamente. Ele é geralmente aplicado após alterações no código para garantir que as partes essenciais do sistema não foram comprometidas.

No contexto deste projeto, o teste de sanidade foca na tela de login, assegurando que os componentes principais (campos de entrada, botão de submissão e validações básicas) estão operacionais.

## Para que pode ser utilizado?

Este tipo de teste é útil para:

- Garantir a estabilidade de funcionalidades críticas após atualizações ou correções.
- Economizar tempo ao identificar rapidamente problemas antes de testes mais detalhados.
- Fornecer uma base confiável para implementações futuras, especialmente em sistemas que dependem de funcionalidades como autenticação.

## Tecnologias Utilizadas

- **Frontend**: React.js  
- **Testes**: Jest, React Testing Library


## Requisitos

- Node.js (versão 16 ou superior)
- NPM ou Yarn

## Como Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/valentinaoliveira/TesteDeSanidade.git
   cd TesteDeSanindade
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute os testes:
   ```bash
   npm test
   # ou
   yarn test
   ```

## Funcionalidades Testadas

- Presença de campos obrigatórios (`login` e `senha`).
- Botão de submissão funcional.
- Exibição de mensagens de erro para campos não preenchidos.

## Melhorias Futuras

- Cobertura de cenários adicionais, como validação de credenciais e acessibilidade.

---
## Autor 

Julia de Lima e Valentina Leite

---
## Link do vídeo

https://youtu.be/mGuW0zA3gPk
