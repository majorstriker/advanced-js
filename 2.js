const cooks = new Map();
cooks.set("Пицца", "Виктор");
cooks.set("Суши", "Ольга");
cooks.set("Десерты", "Дмитрий");

const dishes = new Map();
dishes.set("Маргарита", "Виктор");
dishes.set("Пепперони", "Виктор");
dishes.set("Филадельфия", "Ольга");
dishes.set("Калифорния", "Ольга");
dishes.set("Тирамису", "Дмитрий");
dishes.set("Чизкейк", "Дмитрий");

const alexOrders = new Set().add('Пепперони')
    .add('Тирамису');
const mariyaOrders = new Set().add('Калифорния')
    .add('Маргарита');
const irinaOrders = new Set().add('Чизкейк');

const clients = new Map();
clients.set("Алексей", alexOrders);
clients.set("Мария", mariyaOrders);
clients.set("Ирина", irinaOrders);

console.log(`Пиццу готовит: ${cooks.get("Пицца")}`);
console.log(`Заказ Алексея: ${[...clients.get("Алексей")]}`);
console.log(`Суши готовит: ${cooks.get("Суши")}`);
console.log(`Заказ Марии: ${[...clients.get("Мария")]}`);
console.log(`Десерты готовит: ${cooks.get("Десерты")}`);
console.log(`Заказ Ирины: ${[...clients.get("Ирина")]}`);