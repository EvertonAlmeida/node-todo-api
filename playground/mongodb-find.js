 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     console.log('Unable to connect MongoDB server');
   }
   console.log('connected to MongoDB server');

  //  db.collection('Todos').find({
  //    _id: new ObjectID('584008a64575a75775fcffd6')
  //  }).toArray().then((docs) => {
  //    console.log('Todos');
  //    console.log(JSON.stringify(docs, undefined, 2));
  //  }, (err) => {
  //    console.log('Unable to fetch todos');
  //  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos');
  // });

  db.collection('Users').find({
    name: 'Andrew'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users');
  });

   //db.close();
 });
