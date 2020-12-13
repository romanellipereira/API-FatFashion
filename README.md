![fatfashion](/images/love-your-body.jpg?style=centerme)

# API FatFashion

Esta API foi criada para o projeto final do curso Back-End da {Reprograma}.

## Justificativa

>*Em um mundo pouco adaptado a corpos gordos e em uma sociedade que institucionaliza o preconceito contra os donos desses corpos, navegar pelo cotidiano traz desafios de diversas naturezas, dos mais simples aos mais complexos. Comprar roupa, por exemplo, pode ser uma experiência desgastante – emocionalmente, inclusive.*

Fonte: [Hospital Oswaldo Cruz](https://www.hospitaloswaldocruz.org.br/imprensa/noticias/precisamos-falar-de-gordofobia)

>*Por muito tempo as mulheres “cheinhas” se escondiam, por vergonha, por “não fazer parte dos padrões” e muitas vezes era impossível encontrar uma roupa bonita no seu tamanho ideal! Não é só porque a mulher está fora dos padrões que ela não tem o direito de se sentir bonita, estilosa e vestir-se bem. (...)
>Já se foi o tempo em que roupa para cheinhas era só naquele estilo “senhora”, hoje em dia as gordinhas não querem mais usar as roupas para se “esconder”, com isso, várias marcas apostaram e continuam apostando nesse segmento. Assim, podemos encontrar no mercado muitas opções de modelos, para todos os gostos e estilos.*

Fonte: [O Negócio da Moda](https://ondm.com.br/2018/07/a-moda-plus-size-ganha-forca-no-brasil-e-supera-padroes-de-beleza-do-mercado/)

A API FatFashion foi criada com o objetivo de conectar pessoas gordas a lojas de roupas que produzem e/ou revendem peças tamanhos grandes, que não são encontradas em lojas convencionais. Nesta API, as lojas de atacado e varejo, físicas ou online, podem cadastrar sua marca e fornecer as informações dos tipos de roupas e tamanhos que comercializam, e os usuários podem fazer buscas de acordo região onde está.

![seuestilo](/images/estilo.jpg?style=centerme)

## Tecnologias
* Git/Github
* Node.js
* MongoAtlas
* Postman
* Heroku

### Dependências
* body-parser: v. 1.19.0
* dotenv: v. 8.2.0
* dotenv: v. 8.2.0
* express: v. 4.17.1
* mongoose: v. 5.11.5
* nodemon: v. 2.0.6

### Instruções para Instalação

1. Neste repositório, clique sobre o botão ```Code``` e copie o link

2. Abra o terminal e acesse a pasta onde deseja salvar os arquivos deste repositório. De preferência, utilize o GitBash como temrinal

3. Clone o repositório, colando o link copiado
```
$ git clone https://github.com/romanellipereira/API-FatFashion.git
```
4. Acesse a pasta da aplicação
```
$ cd API-FatFashion
```
5. Instale as dependências inclusas no arquivo "package.json"
```
$ npm install -y
```
6. Execute a aplicação
```
$ npm start
```
7. Acesse as rotas através do navegador ou do Postman, utilizando o link https://fatfashion.herokuapp.com

## Rotas

* Lojas

 Requisição | Endpoint | Função
 ---------- | -------- | ------
GET|/lojas/|Retornar as lojas cadastradas
GET|/lojas/id/:id|Retornar loja cadastrada de acordo com id informado
GET|/lojas/:nomedaloja|Retornar loja(s) cadastrada(s) de acordo com o nome informado
GET|/lojas/estado/:estado|Retornar as lojas cadastradas por Estado informado
GET|/lojas/cidade/:cidade|Retornar as lojas cadastradas por Cidade informada
GET|/lojas/bairro/:bairro|Retornar as lojas cadastradas por Bairro informado
GET|/lojas/confeccao/propria|Retornar as lojas que vendem roupas autorais
GET|/lojas/confeccao/terceiros|Retornar as lojas que vendem roupas produzidas por terceiros
POST|/lojas/nova|Cadastrar loja
PATCH|/lojas/atualizar/id/:id|Atualizar cadastro de acordo com o id informado
PATCH|/lojas/atualizar/:id/endereco|Atualizar endereço de acordo com o id informado
DELETE|/lojas/remover/id/:id/|Remover loja cadastrada 

* Usuários

 Requisição | Endpoint | Função
 ---------- | -------- | ------
GET|/usuarios/|Retornar os usuários cadastrados
GET|/usuarios/:nomedeusuario|Retornar usuário de acordo com o nome de usuário (*username*)
POST|/usuarios/novo|Cadastrar usuário
PATCH|/usuarios/atualizar/:nomedeusuario|Atualizar cadastro de acordo com o nome de usuário (*username*) informado
DELETE|/usuarios/remover/:nomedeusuario|Remover cadastro de acordo com o nome de usuário (*username*) informado

* Forum

 Requisição | Endpoint | Função
 ---------- | -------- | ------
GET|/forum/|Retornar as discussões criadas
GET|/forum/:titulo|Retornar discussão de acordo com o título informado
POST|/forum/novo|Criar nova discussão
PATCH|/forum/editar/id/:id|Editar discussão de acordo com o id informado
PATCH|/forum/editar/:id/responder|Criar um comentário na discussão
DELETE|/forum/remover/id/:id|Remover discussão de acordo com o id informado

## Contrubuição da Comunidade

Se você, assim como eu, acredita num mundo mais inclusivo, venha contribuir corrigindo ou melhorando o código e cadastrando as lojas que você conhece e recomeda!

Clique no botão ```Fork``` e siga o passo a passo para instalação da aplicação no seu computador, crie uma *Branch* e, no fim das edições, abra uma *Pull Request*. Utilize a IDE de sua preferência para editar.

## Dedicação e Agradecimento
![fatfashion](/images/musas.png)
> Mulheres que inspiraram este projeto: [Rauanny Bezerra](https://www.instagram.com/rauannybezerra/) | [Carol Zacarias](https://www.instagram.com/carolzacaa/) | [Iracy Lemos](https://www.instagram.com/tamanho50/)

À estas mulheres incríveis que mudaram a minha vida, assim como a de tantas outras pessoas gordas que não se sentem aceitas pela sociedade, que é estruturalmente gordofóbica. Elas me ensinaram a amar meu corpo e a acreditar em um mundo melhor.

Às mulheres do {reprograma}, com quem eu aprendi tanto nesses últimos 4 meses. Professoras, equipe, alunas, vocês me mostraram o caminho. Gratidão!

À minha mãe e à minha avó, que não está mais aqui, pela força, pela garra, pela fé, pela bravura, pela delicadeza, pelos valores, pelos ensinamentos, pelo trabalho duro, pela honestidade. É tudo por elas.