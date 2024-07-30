"use strict";
const menu = [
    { name: "Margherita", price: 17 },
    { name: "Pepperoni", price: 20 },
    { name: "Hawiann", price: 6 },
    { name: "Veggie ", price: 5 },
];
let cashInRegister = 100;
let nextOrderID = 1;
const orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    let selectedPizza = menu.find((pizzaObj) => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.log(`${pizzaName} is not available`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = {
        id: nextOrderID++,
        pizza: selectedPizza,
        status: "ordered",
    };
    orderQueue.push(newOrder);
    return newOrder;
}
function completeOrder(orderID) {
    const order = orderQueue.find((order) => order.id === orderID);
    if (!order) {
        console.log(`${orderID} was not found in the orderQueue`);
        return;
    }
    order.status = "completed";
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 9 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Meat Lovers", price: 15 });
placeOrder("Margherita");
completeOrder(1);
console.log("Menu", menu);
console.log("cashInRegister", cashInRegister);
console.log("Order Queue", orderQueue);
