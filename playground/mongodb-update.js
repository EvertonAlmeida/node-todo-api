 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     console.log('Unable to connect MongoDB server');
   }
   console.log('connected to MongoDB server');

  //  db.collection('Todos').findOneAndUpdate({
  //    _id: new ObjectID('584008a64575a75775fcffd6')
  //  }, {
  //    $set: {
  //      completed: false
  //    }
  //  }, {
  //    returnOriginal: false
  //  }).then((result) => {
  //    console.log(result);
  //  });

  db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('584017cd4575a75775fcffdc')
   }, {
     $set: {
       name: 'Andrew'
     },
     $inc: {
       age: 1
     }
   }, {
     returnOriginal: false
   }).then((result) => {
     console.log(result);
   });

   //db.close();
 });
