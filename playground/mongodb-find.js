// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connec to to mongodb server');
  }
  console.log('Connected to mongodb server');

  // db.collection('Todos').find({_id: new ObjectID("5d7f8b428612dd0ad93bbc29")}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch data', err);
  // });

  db.collection('Users').find({name: 'Andrew'}).count().then((count) => {
    console.log(`Users count: ${count}`)
  }, (err) => {
    console.log('Unable to fetch data');
  })


  //db.close();
});
