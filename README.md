# s21auto-client-ts 🦤🫦

Клиент для внутреннего GQL API платформы edu.21-school.ru.
Предназначен для использования с [s21auto](https://github.com/s21toolkit/s21auto) для генерации запросов (`src/api.ts`) из HAR логов платформы (см. [Генерация методов](#генерация-методов)).

> [!TIP]
> Если вам нужен простой доступ к платформе, используйте [s21client](https://github.com/s21toolkit/s21client).

Пример использования:

```ts
import { Client, UserAuthProvider } from "@s21toolkit/auto-client"
import { ApiContext } from "./api"

const client = new Client(
   ApiContext,
   new UserAuthProvider(
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
s21auto client-ts generate log.har -o api.ts
```

## Сборка и выпуск релизов

```sh
pnpm install
pnpm build
pnpm release major
```
