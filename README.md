# Solicitation  

Aplicação desenvolvida para controle de fluxo e solicitações de materiais.

# Iniciando  

É necessário clonar o repositório. Para o client:

```
npm start
ng serve
```

Para o serviço REST deixei um JAR no root do repositório para que seja executado mais facilmente.

Porém é necessário checar o application.properties e configurar a base corretamente.

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
