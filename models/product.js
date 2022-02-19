import getDb from "../util/database.js";
import mongoDb from "mongodb";

export default class Product {
  constructor(_id, name, price, category, userId) {
    this._id = new mongoDb.ObjectId(_id);
    this.name = name;
    this.price = price;
    this.category = category;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('Inventory').updateOne( {_id: this._id}, { $set: this} );
    } else {
      dbOp = db.collection('Inventory').insertOne(this);
    }
    return dbOp;
  }

  static fetchAll() {

  }

  static deleteById(productId) {

  }

  static findById(productId) {
    
  }
}