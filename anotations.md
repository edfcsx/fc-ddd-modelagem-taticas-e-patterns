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


## Domain Services
"Um serviço de domínio é uma operação sem estado que cumpre uma tarefa específica de domínio. Muitas vezes, a melhor indicação de que você deve criar um Serviço no modelo de domínio é quando a operação que você precisa executar pareça não se encaixar como um método em um Agregado ou um Objeto de valor."

Vernon, Vaughn. Implementing Domain-Driven Design. Pearson Education. Kindle Edition.

"Quando um processo ou transformação significativa no domínio não for uma responsabilidade natural de uma ENTIDADE ou OBJETO DE VALOR, adicione uma operação ao modelo como uma interface autônoma declarada como um SERVIÇO. Defina a interface baseada na linguagem do modelo de domínio e certifique-se de que o nome da operação faça parte do UBIQUITOUS LANGUAGE. Torne o serviço sem estado".

Evans, Eric. Domain-Driven Design (p.106). Pearson Education. Kindle Edition

Estamos falando de uma entidade stateless sem estado, que está relacionada as entidades de negócio e não por exemplo a um serviço de envio de e-mail.

Perguntas:
  - uma entidade pode realizar uma ação que vai afetar todas as entidades?
  - como realizar uma operação em lote?
  - como calcular algo cuja as informações constam em mais de uma entidade?

Cuidados:
  - Quando houver muitos Domain Services em seu projeto, Talvez isso pode indicar que seus agregados estão anêmicos.
  - Domain Services são Stateless.

## Repositories
Um repositório comumente se refere a um local de armazenamento, geralmente considerado um local de segurança ou preservação dos itens nele armazenados. Quando você armazena algo em um repositório e depois
 retorna para recuperá-lo, você espera que ele esteja no mesmo estado que estava quando você o colocou. Em algum momento, você pode optar por remover o item armazenado do repositório.

Vernon, Vaughn. Implementing Domain-Driven Design. Pearson Eduacation. Kindle Edition.

Esses objetos semelhantes a coleções são sobre persistência. Todo tipo Agregado persistente terá um Repositório. De um modo geral, existe uma relação um-para-um entre um tipo Agregado e um Repositório.

Vernon, Vaughn. Implementing Domain-Driven Design. Pearson Eduacation. Kindle Edition.
