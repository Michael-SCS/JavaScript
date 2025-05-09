const productName = 'Laptop';
const productPrice = 2000;
const brand = 'Dell';

function getProductDetails() {
    const productName = 'Smartphone';
    const productPrice = 1000;

    return `Product: ${productName}, Price: $${productPrice}, Brand: ${brand}`;	
}

console.log(getProductDetails()); // Product: Smartphone, Price: $1000, Brand: Dell
console.log(`Product: ${productName}, Price: $${productPrice}, Brand: ${brand}`); // Product: Laptop, Price: $2000, Brand: Dell