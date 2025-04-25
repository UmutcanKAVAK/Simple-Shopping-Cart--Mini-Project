// # Shopping Cart Mini Project

// A basic JavaScript project that simulates a shopping cart system.

// ## Concepts Practiced
//   - Arrow functions
//     - Array methods: forEach, map, filter, find, reduce, toSorted
//       - Stock control logic
//         - Cart management logic

// ⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️



// ⚔️⚔️⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️⚔️⚔️
//PART-1
const products = [
  { id: 1, name: "T-Shirt", price: 20, stock: 10 },
  { id: 2, name: "Jeans", price: 40, stock: 5 },
  { id: 3, name: "Sneakers", price: 80, stock: 2 },
  { id: 4, name: "Hat", price: 15, stock: 0 },
];

// ⚔️⚔️⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️⚔️⚔️
// PART2
const cart = [];

const addToCart = (cart, productId) => {
  const product = products.find((prod) => prod.id === productId);

  if (!product) {
    console.log("Product not found!");
    return;
  }

  if (product.stock <= 0) {
    console.log("Product is out of stock!");
    return;
  }

  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }
};

addToCart(cart, 2);
addToCart(cart, 1);
addToCart(cart, 3);
addToCart(cart, 1);
// ⚔️⚔️⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️⚔️⚔️
// PART3
// THIS IS ONE WAY
// const removeFromCart = (cart, productId) => {
//   const itemIndex = cart.findIndex(item => item.id === productId);

//   if (itemIndex !== -1) {
//     cart.splice(itemIndex, 1);
//     console.log("Product removed from cart.");
//   } else {
//     console.log("Product not found in cart!");
//   }
// };
// ⚔️⚔️⚔️-------------------- THORFIN ZONE --------------------⚔️⚔️⚔️
// ⚔️⚔️⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️⚔️⚔️
// PART3
const removeFromCart = (cart, productId) => {
  const updatedCart = cart.filter((item) => item.id !== productId);

  if (updatedCart.length === cart.length) {
    console.log("Product not found in cart!");
  } else {
    console.log("Product removed from cart.");
  }
  cart.length = 0;
  cart.push(...updatedCart);
};

// ⚔️⚔️⚔️-------------------- THORFIN ZONE --------------------⚔️⚔️⚔️
// PART - 4
// ⚔️⚔️⚔️ MADE BY THORFIN — CODE LIKE A WARRIOR ⚔️⚔️⚔️


const viewCart = (cart) => {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
    return;
  }

  console.log("Cart Summary:");
  cart.forEach(function (value) {
    console.log(value.name, value.price, value.quantity);
  });

  console.log(
    "Total Number Of Items in the cart:",
    cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  console.log(`Total price of the cart = ${total}$`);

  if (total > 200) {
    total = total * 0.9;
    console.log(`Discount applied! New total = ${total}$`);
  }

  // Define the sortCartByPrice function
  const sortCartByPrice = (cart) => {
    const sortedCart = cart.toSorted((a, b) => a.price - b.price);
    console.log("Sorted Cart by Price:");
    sortedCart.forEach(item => {
      console.log(`${item.name} | Price: $${item.price} | Quantity: ${item.quantity}`);
    });
  };

  // ✅ Now call it here
  sortCartByPrice(cart);
};

viewCart(cart)