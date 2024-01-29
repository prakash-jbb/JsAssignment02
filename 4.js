const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
]

// Empty Array
let priceList = [];

// Set elements in the array
for (let i = 0; i < products.length; i++) {
    priceList.push(products[i].price)
}

// Find min and max price
let minPrice = Math.min(...priceList);
let maxPrice = Math.max(...priceList);

// Find index of min and max price
let indexOfMin = priceList.indexOf(minPrice);
let indexOfMax = priceList.indexOf(maxPrice);

console.log(`The product with maximum amount is ${products[indexOfMax].name} which is priced at Rs. ${maxPrice}`);
console.log(`The product with minimum amount is ${products[indexOfMin].name} which is priced at Rs. ${minPrice}`);