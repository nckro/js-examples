function createBookShop(inventory) {
	return {
    inventory,
    
    inventoryValue() {
      return this.inventory.reduce( (store,book) => store+book.price, 0);
    },
    
    priceForTitle(title) {
      return this.inventory.find(	book => book.title === title).price;
    }
    
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'XXX', price: 25 }
];

const bookShop = createBookShop(inventory);
bookShop.inventoryValue();
bookShop.priceForTitle('XXX');
