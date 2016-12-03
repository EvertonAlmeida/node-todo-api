 const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')


// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5841b5994575a75775fcffde'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5841b5994575a75775fcffde').then((todo) => {
  console.log(todo);
});
