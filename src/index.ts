type Pizza = {
  id: number;
  name: string;
  price: number;
};
type orderStatus = "ordered" | "completed";
type Order = {
  id: number;
  pizza: Pizza;
  status: orderStatus;
};

const menu: Pizza[] = [
  { id: 1, name: "Margherita", price: 17 },
  { id: 2, name: "Pepperoni", price: 20 },
  { id: 3, name: "Hawiann", price: 6 },
  { id: 4, name: "Veggie ", price: 5 },
];

let cashInRegister = 100;
let nextOrderID = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza) {
  menu.push(pizzaObj);
}

function placeOrder(pizzaName: string) {
  let selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
  if (!selectedPizza) {
    console.log(`${pizzaName} is not available`);
    return;
  }
  cashInRegister += selectedPizza.price;
  const newOrder: Order = {
    id: nextOrderID++,
    pizza: selectedPizza,
    status: "ordered",
  };
  orderQueue.push(newOrder);
  return newOrder;
}

function completeOrder(orderID: number) {
  const order = orderQueue.find((order) => order.id === orderID);
  if (!order) {
    console.log(`${orderID} was not found in the orderQueue`);
    return;
  }
  order.status = "completed";
  return order;
}

function getPizzaDetails(identifier: string | number) {
  if (typeof identifier === "string") {
    return menu.find(
      (pizza) => pizza.name.toLowerCase() === identifier.toLowerCase(),
    );
  } else {
    return menu.find((pizza) => pizza.id === identifier);
  }
}

addNewPizza({ id: 1, name: "Chicken Bacon Ranch", price: 9 });
addNewPizza({ id: 2, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 3, name: "Meat Lovers", price: 15 });

placeOrder("Margherita");
completeOrder(1);

console.log("Menu", menu);
console.log("cashInRegister", cashInRegister);
console.log("Order Queue", orderQueue);
