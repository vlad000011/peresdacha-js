# FinTrack — Personal Finance Tracker

Учебный full-stack проект для предмета «Проектный семинар с фреймворками JavaScript».

## Стек
- Next.js 15 + App Router
- React 19 + TypeScript
- Prisma ORM
- SQLite
- Recharts
- Lucide React

## Возможности
- Dashboard со статистикой доходов и расходов
- график динамики расходов
- диаграмма расходов по категориям
- список последних операций
- страница всех операций
- добавление операции через API
- категории
- бюджеты
- настройки
- адаптивная верстка

## Запуск на macOS
### 1. Установить Node.js
Рекомендуется Node.js 20+.
Проверка:
```bash
node -v
npm -v
```

### 2. Перейти в проект
```bash
cd finance-tracker
```

### 3. Установить зависимости
```bash
npm install
```

### 4. Создать env
```bash
cp .env.example .env
```

### 5. Создать SQLite базу
```bash
npm run db:push
```

### 6. Заполнить тестовыми данными
```bash
npm run db:seed
```

### 7. Запустить
```bash
npm run dev
```

Открыть http://localhost:3000

## Полезные команды
```bash
npm run db:studio   # интерфейс Prisma Studio
npm run build       # production build
npm start           # production server
```

## Структура
```text
app/
  api/transactions/route.ts  # REST API операций
  api/categories/route.ts    # REST API категорий
  transactions/page.tsx      # CRUD интерфейс
  budgets/page.tsx
  settings/page.tsx
  page.tsx                    # Dashboard
components/
  Dashboard.tsx
  Sidebar.tsx
lib/
  prisma.ts
prisma/
  schema.prisma
  seed.ts
```

## Что показать на защите
1. App Router и файловую маршрутизацию.
2. Server Component `app/page.tsx` и Client Components с `useState/useEffect`.
3. REST API Route Handlers в `app/api`.
4. Prisma schema и связи `Category -> Transaction`.
5. SQLite как локальную БД.
6. CRUD: создание операции через POST и получение через GET.
7. Recharts для визуализации данных.
8. Адаптивную верстку и разделение UI на компоненты.
