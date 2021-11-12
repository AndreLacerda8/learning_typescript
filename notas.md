Para instalar a ultima versão do node: sudo n lts

Vamos instalar o typescript: sudo npm i -g typescript
Depois: tsc --init   assim ele cria o tsconfig.json

Para executar podemos dar um tsc arquivo.ts  aí ele cria um arquivo.js, e o arquivo.js podemos executar com node
Outra forma de executar é com o code runner, pra isso precisamos instalar: sudo npm i -g ts-node
Outra forma é utilizando um html:
    Demos um npm init -y
    npm i -s live-server
    criamos o script start e executamos
    Aí abrimos outra aba no terminal e executamos um tsc -w pra ele compilar os arquivos ts automaticamente


## tsconfig.json - configurações do compilador
Por padrão, quando tem um erro de tipos no TS ele compila mesmo assim, mas se ativarmos isso no tsconfig ele para de compilar com erro:
"noEmitOnError": true

Podemos mudar o target, que é a versão do JS que ele vai gerar ao compilar.

Podemos ativar "sourceMap": true, que é aquele mapa pra localizarmos o nosso arquivo original no arquivo minificado. Mas nesse caso podemos ter acesso ao arquivo ts. Vemos isso em source no F12 do browser.

Tem a propriedade "noImplicitAny": true, por padrão, assim em alguns casos ele não deixa algumas variávies, como parametros de funções, ficarem sem tipo definido.

Podemos usar "noUnusedParameters": true, para ele reclamar quando não usarmos algum parametro que declaramos

Podemos usar "noUnusedLocals": true, para ele reclamar quando não usarmos alguma variavel que declaramos

Aqui "outDir": "./build" podemos indicar em qual pasta queremos deixar os arquivos gerados.

Aqui "outFile": "./build/app.js" podemos indicar um único arquivo de saída, mas ele é incompatível com o "module": "commonjs".


## Namespace
local onde podemos colocar os nomes sem eles estarem em escopo global, como é por padrão
Mas é melhor usar módulo do que namespace, pois eles não ficam em global e tal, e é necessário importar quando vai usar, ao contrario do namespace.

## Módulos
No browser temos problema de trabalhar com eles, mas no Node não.
Instalamos o systemJS pra executar no browser, mas poderiamos simplesmente rodar com ctrl+alt+n

## Generics
Serve para usarmos em alguns tipos mais genericos, mas sem perder toda a validação como quando usamos any

## Decorators
Para usar sem dar problema tem que ativar: "experimentalDecorators": true,