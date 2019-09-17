// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connec to to mongodb server');
  }
  console.log('Connected to mongodb server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({_id: new ObjectID('5d806245e1c7452c45840c16')},
  // {
  //   $set: {completed: true}
  // }, {returnOriginal: false}).then((result) => {
  //   console.log(result);
  // });

  //Exercises
  db.collection('Users').findOneAndUpdate(
    {
      name: 'Andrew'
    },
    {
      $set: {name: 'Bob'},
      $inc: {age: 1}
    },
    {
      returnOriginal: false
    }
  ).then((result) => {
    console.log(result);
  });

  //db.close();
});
