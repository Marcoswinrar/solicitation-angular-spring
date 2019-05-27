# Solicitation  

Aplicação desenvolvida para controle de fluxo e solicitações de materiais.

# Iniciando  

É necessário clonar o repositório e baixar as dependências. Para o client, executar:

```
npm i
npm start ou ng serve
```

Para o serviço REST deixei um JAR no root do repositório para que seja executado mais fácilmente.

Porém é necessário checar o application.properties e configurar a base corretamente para execução correta do jar.

Caso não queira executar com o jar, configurar também o application.properties e simplesmente executar no STS ou eclipse.

### Tecnologias, ferramentas e arquitetura  

Angular 7 + Material  
FlexLayout  
RSCSS  
Java 12   
JPA  
MySql  
SpringBoot 2.1.5  

No front usei o conceito de arquitetura clean(hexagonal) mais especificamente.  
Onde separei todos os módulos em três camadas:

```
Data (Camada externa que comunica com jobs, servicos e bases)
Domain (Todo dominio do negócio centralizado e isolado, este é o conceito)  
Presentation (Camada externa de apresentação UI, componentes, frameworks)
```
