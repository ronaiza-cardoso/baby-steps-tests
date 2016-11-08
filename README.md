#Baby Steps Tests

esse artigo irá te guiar dentro do mundo de teste unitário no NodeJS


##Setup Ambiente

para acompanhar os códigos desse projeto é preciso ter o NodeJS na em seu ambiente de trabalho, nesse [link](https://nodejs.org/en/download/current/)
você pode fazer o download de acordo com o seu sistema operacional.

Esse projeto irá utilizar o test runner [mocha](https://mochajs.org/) e a biblioteca de asserções [chai](http://chaijs.com/)*
 
 *acesse o site de cada um para maiores informações
 
##Iniciando o projeto

Todas as dependencias necessárias para rodar um projeto node deve ser colocado no package.json
ele pode ser criado por meio do comando ``npm init``. Esse comando irá criar um arquivo de nome
package.json com todas as informações do seu projeto.

    name: (baby-steps-test)
    version: (1.0.0)
    description: just a project to show some baby steps on test in NodeJS
    entry point: (Calc.js)
    test command: mocha -w
    git repository: https://github.com/yesroh/baby-steps-tests.git
    keywords: TESTS, NODE, JS
    author: Ronaiza Cardoso <ronaizacard@gmail.com>
    license: (ISC) MIT
    
em  ``scripts`` podemos colocar atalhos que podemos usar para agilizar o nosso desempenho
alí coloquei o ``mocha `` com o parâmetro ``-w`` para que o mocha fique vendo o nosso arquivo enquanto
fazemos o teste. Para utilizar o mocha por meio do cli(command line interface) você precisa instalar
ele globalmente por meio do comando ``npm install mocha -g``

##Primeiro teste

Vamos testar uma classe calculadora, segue abaixo a classe

[Calc.js](https://gist.github.com/57eb3268e54efeabf6daf4fe22b6bd69.git)
 
agora dentro da pasta test vamos criar os nossos testes, o nome desse teste será calc.spec.js, é 
uma boa prática utilizar como nome dos nossos testes o nome da classe que será testada e o .spec. 
assim o mocha saberá que aquele arquivo se trata de um teste.

No arquivo abaixo estamos importando a classe calc e as a lib do chai, para que assim possamos
utilizar o a dot notation em nosso teste.

na linha 7 colocamos o nome do aquivo que iremos testar, no it o que esse teste deverá fazer

[calc.spec.js](https://gist.github.com/0c312669526512c5c95ba969f975bcb4.git)

aqui você poderá conferir os demais testes da nossa classe.

[calc.spec.js](https://gist.github.com/62e602adf5fefc8d693390346b351915.git)