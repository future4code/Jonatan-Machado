### Exercício 1

a) Irá apagar a coluna salary.

```
ALTER TABLE Actor DROP COLUMN salary;
```

b) trocou o nome da tabela de gender para sex

```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

c) trocou o gender de 6 para 255

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)

```
UPDATE Actor
SET birth_date = "1992/12/02"
WHERE id = "003"
```

b) Isso está errado, pelos motivos:

- Óbvio
- Sem dúvida
