 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     console.log('Unable to connect MongoDB server');
   }
   console.log('connected to MongoDB server');

  //  db.collection('Todos').insertOne({
  //    text: 'Something to do',
  //    completed: false
  //  }, (err, result) => {
  //    if (err) {
  //      return console.log('Unable to insert todo', err);
  //    }
  //
  //    console.log(JSON.stringify(result.ops, undefined, 2));
  //  });

  //Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Andrew',
  //   age: 25,
  //   location:'Philadelphia'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Users', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

   db.close();
 });
