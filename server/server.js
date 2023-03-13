const express = require('express');
const bodyParser = require( 'body-parser' );
const cors = require('cors');
const PORT = 5000;
const pool = require('./pool');

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
    // newTaskToAdd.id = gen.next().value;
    // incompleteTaskList.push(newTaskToAdd);
    // res.send({ message: 'Success!' });
    const queryText = `
                INSERT INTO "tasks"
                ("name", "details", "date", "type")
                VALUES
                ($1, $2, $3, $4);
            `;
    pool.query(queryText, [ // sending query to database via pool module, filtering client data through pg
        newTaskToAdd.name,
        newTaskToAdd.details,
        newTaskToAdd.date,
        newTaskToAdd.type,
    ]).then((result) => { // sending success back to client
        console.log('POST new task success!');
        res.sendStatus(201);
    }).catch((error) => { // in event of error
        console.log('Error in POST', error);
        res.sendStatus(500);
    });
});

// req is request, res is the response
app.get('/alltasks', (req, res) => {
    console.log('in GET /items');
    const queryText = `SELECT * FROM "tasks" WHERE "is_completed" = 'FALSE' ORDER BY "id";`;
    pool.query(queryText).then((result) => { // expecting table results from database
        res.send(result.rows); //send array of rows objects
    }).catch(error => {
        console.log('error getting incomplete tasks', error);
        res.sendStatus(500);
    });
    // res.send(incompleteTaskList);
});

app.get('/completedtasks', (req, res) => {
    // console.log('fetching /completedtasks', completedTaskList);
    // res.send(completedTaskList);
    const queryText = `SELECT * FROM "tasks" WHERE "is_completed" = 'TRUE' ORDER BY "id";`;
    pool.query(queryText).then((result) => { // expecting table results from database
        res.send(result.rows); //send array of rows objects
    }).catch(error => {
        console.log('error getting completed tasks', error);
        res.sendStatus(500);
    });
});

app.patch('/', (req, res) => {
    const taskId = req.body.id;
    console.log(`request to update item id=${taskId}`);
    const queryText = `UPDATE "tasks" SET "is_completed" = NOT "is_completed" WHERE "id" = $1 RETURNING *`
    pool.query(queryText, [taskId]).then((result) => {
        res.sendStatus(200);
    }).catch(error => {
        console.error('error updating the task', error);
        res.sendStatus(500);
    });
    // let index = incompleteTaskList.findIndex(x => x.id === taskId);
    // console.log(`index=${index}, incomplete task list: ${incompleteTaskList}`);
    // if( index === -1 ) console.log(`task with id=${taskId} not found`);
    // else {
    //     let completedTask = incompleteTaskList.splice(index, 1); // this is an array with one object
    //     console.log('removing item', index, completedTask);
    //     completedTaskList.push(completedTask[0]); // just add the object, not the whole array
    //     res.send({message: `removed ${taskId}`});
    // }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});