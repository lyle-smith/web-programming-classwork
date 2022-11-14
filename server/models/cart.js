// CartItem : { id: 1, quantity: 2, productId: 1, userId: "mp@np.edu" }
const list = [];

const add = (productId, userId, quantity) => {
  let cartItem = list.find((item) => item.userId === userId && item.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cartItem = { id: list.length + 1, quantity: +quantity, productId, userId };
  }
  return cartItem;
};

const get = (userId) => {
  return list.filter((item) => item.userId === userId);
};

const remove = (userId, productId) => {
  const index = list.findIndex((item) => item.userId === userId && item.productId === productId);
  if (index !== -1) {
    list.splice(index, 1);
  }
  return index;
}

module.exports = { add, get, remove };