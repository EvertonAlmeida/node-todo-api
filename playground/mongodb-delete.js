 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
   if (err) {
     console.log('Unable to connect MongoDB server');
   }
   console.log('connected to MongoDB server');

    // deleteMany
    //  db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    //  });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });

   //findOneAndDelete
  //  db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //    console.log(result);
  //  });


  // db.collection('Users').deleteMany({name: 'Andrew'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({name: 'Mike'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: ObjectID('583ffd20797703286068c78c')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });
   //db.close();
 });
