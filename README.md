# protractor_example
Protractor example for E2E tests

# Configurando o ambiente
É necessário ter instalado em sua maquina:
- GIT
- NODE

Clone este repositório para sua maquina e faça as seguintes configurações:

## Baixando as dependências
No console, use
```
npm install
```
Esse comando vai instalar as dependências necesárias para utilizar o projeto. Para ver quais são essas dependências, favor visualizar o arquivo package.json

Caso precise instalar uma nova dependencia, usar:
```
npm install <nome_do_pacote>
```
## Ambiente WEB

### Iniciando o WebDriver
```
npm run start:webdriver
```
Esse comando vai instalar a versão mais recente do webdriver e inicia-lo para rodar os testes

### Rodando os testes
```
npm test
```
Esse comando roda os testes de acordo com as configurações parametrizadas no arquivo conf.js
