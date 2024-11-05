### installar las dependencias

```bash
npm install
```

### anadir una `DATABASE_URL` al archivo `.env`

```yml
DATABASE_URL="mongodb+srv://emi:naog7412@cluster0.ouboxvu.mongodb.net/biteware"
```

### Ejecutar npx prisma migrate dev

```bash
npx prisma migrate dev
```

### Ejecutar tsc si es necesario hacer el build del proyecto

```bash
tsc
```

### Ejecutar el comando para iniciar la aplicacion

```bash
npm start
```

### Salida en consola
```js

╭╴  eminataren via  main at …/examen_practico_nodejs via   18.20.4
╰─󰍟 npm start

> examen_practico_nodejs@1.0.0 start
> node dist/index.js

{
  result: 'listo, usuarios en db',
  user: [
    {
      id: '6729ccf90752781974ff10cb',
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com'
    },
    {
      id: '6729ccf90752781974ff10cc',
      name: 'Bob Smith',
      email: 'bob.smith@example.com'
    },
    {
      id: '6729ccf90752781974ff10cd',
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com'
    },
    {
      id: '6729ccf90752781974ff10ce',
      name: 'Diana Prince',
      email: 'diana.prince@example.com'
    },
    {
      id: '6729ccf90752781974ff10cf',
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com'
    },
    {
      id: '6729ccf90752781974ff10d0',
      name: 'Fiona Gallagher',
      email: 'fiona.gallagher@example.com'
    },
    {
      id: '6729ccf90752781974ff10d1',
      name: 'George Costanza',
      email: 'george.costanza@example.com'
    },
    {
      id: '6729ccf90752781974ff10d2',
      name: 'Hannah Montana',
      email: 'hannah.montana@example.com'
    },
    {
      id: '6729ccf90752781974ff10d3',
      name: 'Ian Malcolm',
      email: 'ian.malcolm@example.com'
    },
    {
      id: '6729ccf90752781974ff10d4',
      name: 'Jane Doe',
      email: 'jane.doe@example.com'
    }
  ]
}
```