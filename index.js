const items = [
    { id: 1, name: "apple", price: 1.75, categoryId: 1, inventory: 100 },
    { id: 2, name: "banana", price: 0.25, categoryId: 1, inventory: 100 },
    { id: 3, name: "orange", price: 1.0, categoryId: 1, inventory: 100 },
    { id: 4, name: "broccoli", price: 3.0, categoryId: 2, inventory: 100 },
    { id: 5, name: "cucumber", price: 1.0, categoryId: 2, inventory: 100 },
    { id: 6, name: "milk", price: 6.75, categoryId: 3, inventory: 100 },
    { id: 7, name: "cheddar cheese", price: 4.0, categoryId: 3, inventory: 100 },
    { id: 8, name: "sourdough loaf", price: 5.5, categoryId: 4, inventory: 100 },
  ];
  
  function getItemNames(items){
    return items.map(item => item.name);
  }
  
  function getItemPrices(items){
    return items.map(item => item.price);
  }
  
  function findItemById(id, items){
    return items.find(item => item.id === 2);
  }
  
  function mostExpensiveItem(items){
    let prices = items.map(item => item.price);
    let max = prices[0]
    prices.forEach(price => {
      if (price > max) {
        max = price;
      }
    });
    return  items.filter(item => item.price === max);
  }
  
  function leastExpensiveItem(items){
    let min = items.reduce((prevMin, current) => (current.price < prevMin ? current.price : prevMin), items[0].price);
    return  items.filter(item => item.price === min);
  }
  
  function calculateInventory(items){
    let total = items.reduce((acc, current) => (acc + current.inventory), 0);
    return  total;
  }
  
  //write the following functions and test them
  
  console.log(getItemNames(items));//returns an array of the names of the items
  console.log(getItemPrices(items));//returns an array of prices
  console.log(findItemById(2, items));//returns an item by it's id
  console.log(mostExpensiveItem(items));//returns the most expensive item 
  console.log(leastExpensiveItem(items));//returns the least expensive item 
  console.log(calculateInventory(items));//returns the total value of the inventory 
  
  
  