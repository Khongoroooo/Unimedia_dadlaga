type Product = {
  name: string;
  price: number;
  inStock: boolean;
};

const product: Product = {
  name: "Phone",
  price: 2500,
  inStock: true,
};

function printProduct(product: Product): void {
  const stockStatus = product.inStock ? "In Stock" : "Out of Stock";
  console.log(`Product: ${product.name} — $${product.price} — ${stockStatus}`);
}
printProduct(product);
