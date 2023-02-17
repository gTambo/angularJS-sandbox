const express = require('express');
const bodyParser = require( 'body-parser' );
const cors = require('cors');
const PORT = 5000;

const incompleteTaskList = [{
    "id": 1,
    "name": "Write a to-do list in AngularJS",
    "details": "That's what this is...",
    "type": "",
    "date": "Thu Feb 16 2023 15:07:16 GMT-0600 (Central Standard Time)"
}];
const completedTaskList = [];

// Create our app
const app = express();

// Used for POST requests so that we can access req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the public/ folder
app.use(express.static('../app/index.html'));

app.post('/newtask', (req, res) => {
    console.log('received new task: ', req.body);
    const newTaskToAdd = req.body;
    incompleteTaskList.push(newTaskToAdd);
    res.send({ message: 'Success!' });
});

// req is request, res is the response
app.get('/alltasks', (req, res) => {
    console.log('in GET /items');
    res.send(incompleteTaskList);
});

app.patch('/', (req, res) => {
    const taskId = req.body.id;
    let index = incompleteTaskList.indexOf(x => x.id === taskId)
    let completedTask = incompleteTaskList.splice(index, 1);
    completedTaskList.push(completedTask);
    res.send({message: `removed ${taskId}`});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});