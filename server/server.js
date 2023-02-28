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

function* idMaker() {
    let index = 2;
    while (true) {
      yield index++;
    }
  }
  
const gen = idMaker();

app.post('/newtask', (req, res) => {
    console.log('received new task: ', req.body);
    const newTaskToAdd = req.body;
    newTaskToAdd.id = gen.next().value;
    incompleteTaskList.push(newTaskToAdd);
    res.send({ message: 'Success!' });
});

// req is request, res is the response
app.get('/alltasks', (req, res) => {
    console.log('in GET /items');
    res.send(incompleteTaskList);
});

app.get('/completedtasks', (req, res) => {
    console.log('fetching /completedtasks', completedTaskList);
    res.send(completedTaskList);
});

app.patch('/', (req, res) => {
    const taskId = req.body.id;
    console.log(`request to remove item id=${taskId}`);
    let index = incompleteTaskList.findIndex(x => x.id === taskId);
    console.log(`index=${index}, incomplete task list: ${incompleteTaskList}`);
    if( index === -1 ) console.log(`task with id=${taskId} not found`);
    else {
        let completedTask = incompleteTaskList.splice(index, 1); // this is an array with one object
        console.log('removing item', index, completedTask);
        completedTaskList.push(completedTask[0]); // just add the object, not the whole array
        res.send({message: `removed ${taskId}`});
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});