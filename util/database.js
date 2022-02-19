import mongodb from "mongodb";
import { readFile } from 'fs/promises';
const MongoClient = mongodb.MongoClient;

let _db;

const json = JSON.parse(
  await readFile(
    new URL('../mongoDBAUth.json', import.meta.url)
  )
);

export const mongoConnect = (callback) => {
  MongoClient.connect(`mongodb+srv://${json.username}:${json.password}@cluster0.f6tfr.mongodb.net/Inventory?retryWrites=true&w=majority`)
  .then(client => {
    console.log("MongoDB connected !");
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
}
export const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
}

