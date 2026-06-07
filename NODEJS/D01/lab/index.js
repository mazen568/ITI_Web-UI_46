const fs = require("fs");

const [, , command, ...args] = process.argv;
// console.log(command, args);

const readProducts = () => {
  const data = fs.readFileSync("./products.json", "utf-8");
  return JSON.parse(data);
};

const writeProducts = (products) => {
  fs.writeFileSync("./products.json", JSON.stringify(products, null, 2));
};

const addProduct = (name, price) => {
  const newProduct = {
    id: Date.now(),
    name,
    price,
  };
  const products = readProducts();
  products.push(newProduct);
  writeProducts(products);
};

const listProducts = () => {
  const products = readProducts();
  console.log(products);
};

// const updateProduct = (id, name) => {
//   const products = readProducts();
//   const idx = products.findIndex((p) => p.id === Number(id));
//   if (idx != -1) {
//     products[idx].name = name;
//     writeProducts(products);
//   } else {
//     console.log("product not found");
//   }
// };

const deleteProduct = (id) => {
  const products = readProducts();
  const idx = products.findIndex((p) => p.id === Number(id));
  if (idx != -1) {
    const filteredProducts = products.filter((p) => p.id !== Number(id));
    writeProducts(filteredProducts);
  } else {
    console.log("product not found");
  }
};

const updateProductBonus = (id, flags) => {
  const products = readProducts();
  const idx = products.findIndex((p) => p.id === Number(id));
  if (idx != -1) {
    if (flags.includes("--name")) {
      const nameIdx = flags.indexOf("--name");
      products[idx].name = flags[nameIdx + 1];
    }
    if (flags.includes("--price")) {
      const priceIdx = flags.indexOf("--price");
      products[idx].price = flags[priceIdx + 1];
    }
    writeProducts(products);
  } else {
    console.log("product not found");
  }
};
switch (command) {
  case "add":
    addProduct(args[0], args[1]);
    break;
  case "read":
    listProducts();
    break;
  case "update":
      updateProductBonus(args[0], args.slice(1));
    break;
  case "delete":
    deleteProduct(args[0]);
    break;

  default:
    break;
}
