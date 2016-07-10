# Tutorial de como criar seu próprio CLI (Command line interface)

### Nossas motivações
Recentemente surgiu a necessidade de criarmos rapidamente nossa arquitetura de soluções web, e era muito custoso e chato criarmos manualmente. Eu particularmente tinha curiosidade de saber como o Yeoman funcionava e isso me moveu e nos inspirou criar algo parecido. 

Não encontramos muitos materiais, por isso Virgilio e eu resolvemos começar a compartilhar um pouco nossas descobertas e não só se alimentar do conhecimento da comunidade. Espero que ajude!

### Vamos ao que interessa
No caso deste tutorial queremos mostrar um caminho de criar um Command Line Interface aproveitando-se do NODE e NPM. Vamos utilizar como exemplo neste tutorial um gerador de arquitetura.

### Test drive
Bom antes de começar, baixe o gerador e faça alguns testes. Para funcionar provavelmente precisará abrir o prompt e digitar ***npm link*** para o npm entender como pacote global.

### Pré-requisitos
- [node.js]
- [npm]

### Primeiro crie a estrutura de pastas:

Crie a pasta do seu projeto e crie as seguintes subpastas:
  - bin
  - lib

### Crie o package.json
Abra o bash ou algum prompt e digite:
```sh
> npm init
```
Preencha como quiser as informações.


Depois de criar, o mais importante é indicar para o npm qual é o script que ele executará. Para fazer isso no ***package.json*** insira a seguinte informação:
```json
  "bin": {
    "sample-generator": "bin/SampleGenerator.js"
  },
```
Sendo que bin é a pasta que criamos, e "sample-generator" é o comando que digitaremos no prompt para executar nosso CLI.


[npm]: <http://www.npmjs.com>
[node.js]: <http://nodejs.org>
