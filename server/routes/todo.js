const Router = require('koa-router');
const { add, fetchList, deleteItem } = require('../controllers/todo');
const todo = new Router();

todo.post('/add', add);
todo.get('/fetch', fetchList);
todo.delete('/delete/:_id', deleteItem);
// todo.put('/toggle', toggle);

module.exports = todo;