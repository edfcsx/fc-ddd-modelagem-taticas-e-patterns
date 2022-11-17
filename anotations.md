## Entities

"Uma entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo."

Vernon, Vaughn. Implementing Domain-Driven Design. Pearson Education. Kindle Edition.

"Uma entidade é algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária."

Evans, Eric. Domain Driven (p. 91). Pearson Education. Kindle Edition.

Entidade = IDENTIDADE

Principios:
- consistência constante em primeiro lugar: A entidade sempre vai ter que representar obrigatoriamente o estado correto e atual daquele elemento.
- princípio de autovalidação: Uma entidade por padrão ela sempre vai ter que se auto validar, caso isso seja terceirizado para qualquer outra parte do sistema, ela corre o risco de por erro externo a mesma ficar incosistente.

### Entidade Anêmica
Uma entidade anêmica, armazena apenas dados como por exemplo um DTO, não contendo lógica.

### Entidade VS ORM
Uma entidade no DDD deve ser focada em négocio enquanto a entidade do ORM é focada em persistência, nesse caso podemos atribuir até outras nomeclaturas como por exemplo model, tendo como o unico objetivo facilitar a vida para persistência de dados.

exemplo:

(complexidade de negocio)\
Domain
  - entity (regra de negocio)
    - customer.ts (regra de negocio)

(complexidade acidental)\
Infra (mundo externo)
  - entity / model
    - customer.ts (getters, setters)


## Value Objects
"Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object."

"Trate o value object como imutável."

Evans, Eric. Domain Driven Design (p.99). Pearson Education. Kindle Edition.

regras:
  - O value object tem que se auto validar.
  - O value object não possui id, pois ele não é único mas apenas um conjunto de propriedades.
  - Ele é imutável.

## Aggregates / Agregados
"Um agregado é um conjunto de objetos associados que tratamos como uma unidade para propósito de mudança de dados"

Evans, Eric. Domain Driven Design (p.126). Pearson Education. Kindle Edition.

![Alt text](./imgs/aggregates.png?raw=true "Aggregates")


