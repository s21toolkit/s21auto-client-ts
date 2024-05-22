# s21auto-client-ts 🦤🫦

Клиент для внутреннего GQL API платформы edu.21-school.ru.
Предназначен для использования с [s21auto](https://github.com/s21toolkit/s21auto) для генерации запросов (`src/api.ts`) из HAR логов платформы.

> [!IMPORTANT]
> Готовые версии автоклиента (со сгенерированным `src/api.ts`) не публикуются на гитхабе и в нпме.
> Если вам нужен простой доступ к платформе, используйте [s21client](https://github.com/s21toolkit/s21client).
> Если же нужен именно автоклиент, его нужно склонить и собрать самостоятельно по [инструкции](#генерация-методов) ниже.

> [!NOTE]
> Работает на `node>=20.0.0`, скорее всего должен работать в браузере

```sh
npm install @s21toolkit/client
```

Пример использования:

```ts
import { Client, UserAuthProvider } from "@s21toolkit/client"

const client = new Client(
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
s21auto client-ts generate log.har -o src/api.ts
```

## Сборка и выпуск релизов

```sh
pnpm install
pnpm build
pnpm release major
```
