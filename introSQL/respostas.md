### Exercício 1

a) A query:

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
		gender VARCHAR(6) NOT NULL
);
```

CREATE TABLE Actor -> criar a tabela ator
VARCHAR(255) PRIMARY KEY, -> cria um campo varchar que é para aceitar textos com 255 caracteres e como primay key
FLOAT NOT NULL -> aceita tipos numericos com ponto flutuante não pode ser nulo
DATE -> aceita apenas dados que sejam datas

b) A query é:

```
SHOW DATABASES
SHOW TABLES
```

SHOW -> comando para mostrar algo
DATABASES -> BANCO DE DADOS
TABLES -> TABELAS

c)

```
desc Actor
```

mostra toda estrutura da tabela

### Exercício 2

a) A resposta é: Blablabla, porque:

```
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "002",
  "Gloria Piraes",
  1200000,
  "1963-08-23",
  "female"
);
```

b) Isso está errado, pelos motivos:
está errado, pois o id precisa ser único, isso é não pode repetir

3)
