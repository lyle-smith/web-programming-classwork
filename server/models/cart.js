const { getProduct, collection } = require('./products');

const list = [];

const { connect } = require('./mongo');
const { Db } = require('mongodb');

const COLLECTION_NAME = "cart";

const get = async (userId) => {
  const db = await collection();
  const data = await db.find({ userId }).toArray();
  return data
  .map((cartItem) => ({ 
    ...cartItem, 
    product: getProduct(cartItem.productId) 
  }));
};

/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const add = async (userId, productId, quantity) => {
  const db = await collection();
  let cartItem = await db.findOne({userId, productId});
  // let cartItem = list.find((item) => item.userId === userId && item.productId === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
    db.updateOne({userId, productId}, cartItem);
  } else {
    cartItem = { 
      id: list.length + 1, 
      quantity, 
      productId, userId 
    };
    
    await db.insertOne(cartItem);
  }
  return { ...cartItem, product: getProduct(productId) };
};

/**
 * 
 * @param {string} userId 
 * @param {number} productId 
 * @param {number} quantity 
 * @returns 
 */
const update = async (userId, productId, quantity) => {
  const db = await collection();
  const index = list.findIndex((item) => item.userId === userId && item.productId === productId);
  if (index !== -1) {
    if (quantity === 0) {
      await db.deleteOne({userId, productId});
      return "null";
    } else {
      let cartItem = await db.findOne({userId, productId});
      cartItem.quantity = quantity;
      db.updateOne({userId, productId}, cartItem);
    }
  } else {
    throw new Error('Cart item not found');
  }
  return { ...list[index], product: getProduct(productId) };
}

module.exports = { add, get, update };