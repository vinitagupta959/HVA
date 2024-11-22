  
const products = [
  { id: 1, name: "Banana", price: 1.99, category: "Food" },
  { id: 2, name: "Laptop", price: 500, category: "Electronics" },
  { id: 3, name: "Shoes", price: 40, category: "Footwear" },
  { id: 4, name: "Apple", price: 2.5, category: "Food" },
  { id: 5, name: "Watch", price: 150, category: "Accessories" },
  { id: 6, name: "Book", price: 7.99, category: "Books" },
];
 
function displayProducts(productsArray) {
  productsArray.forEach(function (product) {
    console.log(`${product.name} - $${product.price.toFixed(2)}`);
  });
}
 
const taxRate = 0.10;
const productsWithTax = products.map(function (product) {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    priceWithTax: (product.price * (1 + taxRate)).toFixed(2),
  };
});
productsWithTax.forEach(function (product) {
  console.log(`${product.name} - $${product.priceWithTax}`);
});
 
const foodProducts = products.filter(function (product) {
  return product.category === "Food";
});
 
displayProducts(foodProducts);

const affordableProducts = products.filter(function (product) {
  return product.price < 10;
});

const affordableProductsStrings = affordableProducts.map(function (product) {
  return `${product.name} - $${product.price.toFixed(2)}`;
});

console.log(affordableProductsStrings);

 
let totalPrice = products.reduce(function (sum, product) {
  return sum + product.price;
}, 0);

console.log("\nTotal Price of All Products:");
console.log(`$${totalPrice.toFixed(2)}`);
