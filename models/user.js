import getDb from "../util/database.js";
import mongoDb from "mongodb";

export default class User {
  constructor(_id, firstname, lastname, role) {
    this._id = _id;
    this.firstname;
    this.lastname;
    this.role = role;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection('User').updateOne( {_id: this._id}, { $set: this} );
    } else {
      dbOp = db.collection('User').insertOne(this);
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