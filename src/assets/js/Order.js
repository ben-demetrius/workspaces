class ItemCost {
  constructor(itemName, price, quantity) {
    this.itemName = itemName;
    this.price = price;
    this.quantity = quantity;

    const calcTotalItemCost = () => {
      return this.price * this.quantity;
    };

    this.totalItemCost = calcTotalItemCost();
  }
}

const myItem = new ItemCost("Ceasar Chicken Salad", 5, 2);

export default ItemCost;
