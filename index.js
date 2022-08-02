const express = require('express');
const app = express();
const mongoose = require('mongoose');
const TodoTask = require('./models/TodoTask');

mongoose.connect(
	'mongodb://localhost:27017/',
	{
		dbName: 'todolistDB',
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => (err ? console.log(err) : console.log('Connected to database'))
);

app.use('/static', express.static('public'));

app.use(express.urlencoded({ extended: true }));

//view engine configaration
app.set('view engine', 'ejs');

// GET METHOD
app.get('/', (req, res) => {
	TodoTask.find({}, (err, tasks) => {
		res.render('todo.ejs', { todoTasks: tasks });
	});
});

//POST METHOD
app.post('/', async (req, res) => {
	const todoTask = new TodoTask({
		content: req.body.content,
	});
	try {
		await todoTask.save();
		res.redirect('/');
	} catch (err) {
		res.redirect('/');
	}
});

//UPDATE
app
	.route('/edit/:id')
	.get((req, res) => {
		const id = req.params.id;
		TodoTask.find({}, (err, tasks) => {
			res.render('todoEdit.ejs', { todoTasks: tasks, idTask: id });
		});
	})
	.post((req, res) => {
		const id = req.params.id;
		TodoTask.findByIdAndUpdate(id, { content: req.body.content }, (err) => {
			if (err) return res.send(500, err);
			res.redirect('/');
		});
	});

//DELETE
app.route('/remove/:id').get((req, res) => {
	const id = req.params.id;
	TodoTask.findByIdAndRemove(id, (err) => {
		if (err) return res.send(500, err);
		res.redirect('/');
	});
});

// mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connected to db!')})

app.listen(3000, () => console.log('Server Up and running'));
