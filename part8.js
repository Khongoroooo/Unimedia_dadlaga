var product = {
    name: "Phone",
    price: 2500,
    inStock: true,
};
function printProduct(product) {
    var stockStatus = product.inStock ? "In Stock" : "Out of Stock";
    console.log("Product: ".concat(product.name, " \u2014 $").concat(product.price, " \u2014 ").concat(stockStatus));
}
printProduct(product);
