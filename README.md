
# Compasso UOL | Desenvolvedor BackEnd NodeJS PL/SR

O desafio visa avaliar a capacidade técnica de implementação de uma API usando NestJS,  GraphQL e MongoDB. Para este projeto deverá ser desenvolvida uma API de CRUD de produtos com as tecnologias listadas abaixo:
- Nestjs;
- GraphQL;
- Mongodb (utilizar o mongoose);
- Docker;
- Docker Compose; e
- Jest (para os testes unitários) *Opcional.

A Entidade de Produto deve seguir as seguintes especificações:

- Nome da Collection no mongo: **products**;
- Deve possuir os seguintes campos:
	- **sku**: ObjectId – id único do produto;
	- **name**: string – Nome do Produto;
	- **description**: string - Descrição do Produto;
	- **is_active**: boolean – Flag informando se o Produto está ativo;
	- **price**: number – Preço do Produto;
	- **weigth**: number – Peso do Produto;
	- **status**: number – Status do Produto;
		- 0 – Indisponível em estoque; e
		- 1 – Disponível em estoque.

#### API

As seguintes ações deverão ser criadas no GraphQL:

 1. **createProduct** – Para Criar o Produto  
 2. **getProducts** – Para obter todos os produtos  
 3. **getProductBySku** – Para obter um produto pelo sku
 4. **updateProduct** – Para atualizar um Produto
 5. **deleteProduct** – Para deletar um Produto

*Cada ação citada acima deve possuir um teste unitário [opcional]. Realizar as validações adequadas para cada caso.*

#### GiT

Criar um repositório no github e seguir as recomendações abaixo:

 1. Uma branch **develop** deverá ser criada;
 2.  As branches **master** e **develop** não deverão receber commits diretamente, somente **pull request** pode ser feito nessas branchs;
 3. Crie branches para as funcionalidades e realize merge na develop.

#### CRITÉRIOS

- [x] *Analisar e compilar o seu código;*
- [x] *Rodar aplicação e executar testes para validar o atendimento funcional dos items acima;*
- [x] *Verificar se o código é limpo (Clean Code), fácil de entender e de dar manutenção;*
- [x] *O saldo entre o que for positivo e o que for negativo vai determinar a recomendação do ponto de vista técnico ou não de sua contratação, se faltar pouco para atingir uma recomendação positiva, daremos um prazo para correção e retorno;*
###### REQUISITOS OBRIGATÓRIOS
- [x] *Operações acima funcionando sem erros;* e
- [x] *Código válido, estruturado e organizado para que possamos testar sua aplicação;*
- [x] *Utilização de Node 10+ o resto é por sua conta escolher. Dicas:*
	- *Tenha em mente que o seu avaliador irá executar o código;*
	-  *Procure fazer uma entrega simples mas consistente, usando a experiência e conhecimento adquiridos durante sua carreira;*
	- *Não se preocupe em entregar algo extremamente completo ou rebuscado, não vamos usar este código em produção;*
	- *Tudo será avaliado, dê o seu melhor!*

---

#### TECNOLOGIAS APLICADAS

| DESCRIÇÃO | VERSÃO ||
|-----------|--------|-|
|Node JS | `v14.15.0` |[Leia +](https://nodejs.org/en/)|
|Mongo DB | `v4.4` |[Leia +](https://www.mongodb.com/)|
|Mongoose | `v5.11.9` | [Leia +](https://mongoosejs.com/) |
|NestJS | `v7.5` | [Leia +](https://docs.nestjs.com/) |
|GraphQL | `v15.4` | [Leia +](https://graphql.org/learn/) |
|Docker | `v20.10.0` | [Leia +](https://docs.docker.com/) |
|Docker-Compose | `v1.27.4` / `v3.8` | [Leia +](https://docs.docker.com/compose/) |




### EXECUTANDO O PROJETO

Para executar o projeto, siga essencialmente estes passos:

 - Clone este respositório:
    `git clone https://github.com/pauloigorms/desafio-uol.git`
    
  - Navegue até o diretório *webapp*:
	`cd webapp`
	
  - Execute o seguinte comando -- *tenha em mente que precisará ter instalado na máquina:  NodeJS, Docker e Docker Compose*:
	`docker-compose up`

  - Aguarde até que todo o contêiner seja construído, após isso acesse em seu navegar o seguinte endereço:
	  [http://localhost:3000/graphql](http://localhost:3000/graphql)

	Ilustrando os passos descritos até aqui.

	<img src="./imgs/start.png" height="250">

 - Para testar as funcionalidades da API use as sequintes *queries* ou *mutations*;
     - **createProduct**  – para testar a função de criação, use esse trecho como exemplo:
		 ```
		 mutation {
		   nproduct(
		     product: {
		       name:"Produto A",
		       description: "Uma simples descrição do produto A",
		       is_active: true,
		       price: 89.99,
		       weigth: 5,
		       status: 0
		     }) {
		     name
		     sku
		   }
		}
		 ```

		<img src="./imgs/create.png">

	 - **getProducts** – para obter todos os produtos cadastrados, execute:
		 ```
		 query {
			products(filters: {}) {
				 sku
				 description
				 name
				 is_active
				 price
				 weigth
				 status
			} 
		 }
		```
		Além disso, caso queira filtrar por algo específico ou passar alguma condição de retorno, insira como parâmetro do *filter* conforme exemplificado abaixo:
		```
		query {
			 products(filters: { is_active: true }) {
				sku
				name
				is_active
			} 
		 }
		```

		<img src="./imgs/getall.png">

	  - **getProductBySku** – para obter um produto específico usando como parâmetro o *sku*, i. e., o código identificador, pode-se utilizar o seguinte trecho:
	    ```
	    query {
			 product(sku: code_id) {
				sku
			    description
			    name
			    is_active
			    price
			    weigth
			    status
			} 
		 }
		```

		<img src="./imgs/getone.png">

   - **updateProduct** – para atualizar um produto basta passar o *sku* e os campos que deseja atualizar, veja como:
	 ```
	 mutation {
		  uproduct(product: { sku: code_id, status: 0} {
		     sku
		     status
		  }
	 }
	 ```

	 <img src="./imgs/update.png">

   - **deleteProduct** – para deletar um produto basta enviar o código identificador como parâmetro.
     ```
	 mutation {
		rproduct(sku: code_id)
	 }
     ```

	 <img src="./imgs/delete.png">


*Desenvolvido com* ❤️ *por [Paulo Moraes](http://pauloigorms.github.io/).* 