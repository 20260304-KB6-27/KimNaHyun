let likePizza = false;
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve('피자를 주문합니다. ');
  } else {
    reject('피자를 주문하지 않습니다. ');
  }
});

const orderPizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve('피자를 주문했습니다. ');
  } else {
    reject('피자를 주문하지 않습니다. ');
  }
});

pizza
  .then((result) => {
    console.log(result);
    return orderPizza;
  })
  .then((order) => {
    console.log(order);
  })
  .catch((err) => console.log(err));
