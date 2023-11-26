# s21client-ts 🦤🫦

Клиент для внутреннего GQL API платформы edu.21-school.ru.

> [!IMPORTANT]
> Работает на `node>=20.0.0`, скорее всего должен работать в браузере
>
> Для установки необходимо добавить github npm registry

```sh
npm install @s21toolkit/client
```

Пример `.npmrc` для установки:

```npmrc
@s21toolkit:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${GITHUB_NPM_TOKEN}
```

Пример использования:

```ts
import { Client, DefaultAuthProvider } from "@s21toolkit/client"

const client = new Client(
  new DefaultAuthProvider(
    process.env.S21_USERNAME,
    process.env.S21_PASSWORD
  )
)

const user = await client.api.getCurrentUser()

console.log(user)
```

## Генерация методов

Методы клиента генерируются автоматически на основе запросов платформы к бекенду.

Для генерации запросов используется [s21auto](https://github.com/s21toolkit/s21auto):

```sh
s21auto client-ts generate log.har -o src/api.ts
```

## Сборка и выпуск релизов

```sh
pnpm install
pnpm build
pnpm release major
```
