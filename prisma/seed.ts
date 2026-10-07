import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.transaction.deleteMany();
  await prisma.category.deleteMany();
  const categories = await Promise.all([
    prisma.category.create({ data: { name: 'Еда', icon: '🍔', color: '#f97316' } }),
    prisma.category.create({ data: { name: 'Жильё', icon: '🏠', color: '#6366f1' } }),
    prisma.category.create({ data: { name: 'Транспорт', icon: '🚗', color: '#06b6d4' } }),
    prisma.category.create({ data: { name: 'Развлечения', icon: '🎮', color: '#ec4899' } }),
    prisma.category.create({ data: { name: 'Зарплата', icon: '💼', color: '#22c55e' } }),
    prisma.category.create({ data: { name: 'Покупки', icon: '🛍️', color: '#eab308' } })
  ]);
  const c = Object.fromEntries(categories.map(x => [x.name, x.id]));
  const now = new Date();
  const day = (offset: number) => new Date(now.getFullYear(), now.getMonth(), now.getDate() - offset);
  await prisma.transaction.createMany({ data: [
    { title: 'Зарплата', amount: 3200, type: 'income', date: day(2), categoryId: c['Зарплата'], note: 'Основной доход' },
    { title: 'Аренда квартиры', amount: 780, type: 'expense', date: day(3), categoryId: c['Жильё'] },
    { title: 'Супермаркет', amount: 86.40, type: 'expense', date: day(1), categoryId: c['Еда'] },
    { title: 'Метро', amount: 42, type: 'expense', date: day(4), categoryId: c['Транспорт'] },
    { title: 'Steam', amount: 39.99, type: 'expense', date: day(5), categoryId: c['Развлечения'] },
    { title: 'Наушники', amount: 129, type: 'expense', date: day(7), categoryId: c['Покупки'] },
    { title: 'Кафе', amount: 24.50, type: 'expense', date: day(8), categoryId: c['Еда'] },
    { title: 'Такси', amount: 18.90, type: 'expense', date: day(10), categoryId: c['Транспорт'] },
    { title: 'Фриланс', amount: 620, type: 'income', date: day(12), categoryId: c['Зарплата'], note: 'Проект' },
    { title: 'Ресторан', amount: 57, type: 'expense', date: day(14), categoryId: c['Еда'] }
  ]});
}
main().finally(() => prisma.$disconnect());
