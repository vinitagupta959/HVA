let inventory = [
    { id: 123, name: "Pan", price: 12.5, quantity: 4 },
    { id: 124, name: "Pencil", price: 1.5, quantity: 10 },
    { id: 125, name: "Slate", price: 8.0, quantity: 2 },
    { id: 126, name: "Copy", price: 3.0, quantity: 15 },
  ];
  class product{
      constructor(id,name,price,quantity){
          this.id=id;
          this.name=name;
          this.price=price;
          this.quantity=quantity;
      }
  }
  function displayProducts(){
  inventory.forEach(function(item){
      console.log(`${item.name} - $${item.price} (${item.quantity})`)
  })
  }
   
   function addProduct(id, name, price, quantity) {
    const newProduct = new product(id, name, price, quantity); // Use the parameters
    inventory.push(newProduct); // Add the dynamically created product to the inventory
  }
  
  displayProducts(addProduct)
  addProduct(127, "Notebook", 2.99, 25);
  
   function updateProduct(id, quantity) {
    const product = inventory.find(function(product) {
      return product.id === id;
    })
    if (product) {
      product.quantity = quantity; 
      
    }
  }
  displayProducts(updateProduct)
  function updateProductWithMap(id,quantity){
    inventory=inventory.map(function(product) {
       if (product.id === id) {
        return new product(product.id, product.name, product.price, quantity);
      } else {
           return product;
      }
    })
     
  }
  displayProducts(updateProductWithMap)
  
  function removeProduct(id){
    inventory=inventory.filter(function(item){
       return item.id !== id; 
    })
     
  }
  
   displayProducts()
  
  
  
  