// dependencies to require

const path = require ('path');
const fs = require('fs');
const shortid = require('shortid');
const jsonData = require('../db/db.json');
const jsonDataDir = path.resolve(__dirname, "../db/db.json");

// initializing express routes

module.exports = (app) => {

// get route to receive data from json file

app.get('/api/notes',  (req, res) => res.json(jsonData));

// post route to create a new note and send to the jsonData

app.post('/api/notes', (req, res) => {
    let newNote = {
       title:  req.body.title,
       text:  req.body.text,
       id:  shortid.generate()
      }
    jsonData.push(newNote);

// 'fs' readfile of json data and pushing to new note to json

    fs.readFile(jsonDataDir, 'utf8', (err, data) => {
        if (err) throw err;
        else {  
          parsed = JSON.parse(data);
          parsed.push(newNote); 

// 'fs' writefile to send new note into a new file

        fs.writeFile(databaseDir, JSON.stringify(parsed, null, 2),'utf8', (err) => {
          if (err) throw err
          else { console.log("success!")}
        });
      };

// 'fs' readfile of the new JSON data file

      newData = fs.readFile(jsonDataDir, 'utf8', (err, data) =>{
        if (err) throw err
      res.json(newData);
    });
  });
})

// route to delete notes

app.delete(`/api/notes/:id`, (req, res) => {

  let deleteID = req.params.id;

// new array of data

    let newData = [];

// 'fs' readfile reviewing what item the user wishes to delete

    fs.readFile(jsonDataDir, 'utf8', (err, result) => {
      if(err) throw err;
      parseDelete = JSON.parse(res);
      res.send(result)

// for loop to search the array and splice the result      

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === deleteID) {
            console.log(result[i]);
            result.splice([i], 1);
        };
    };
  }) 

// 'fs' write file to show the new file system with the old note removed

      fs.writeFile(jsonDataDir, JSON.stringify(result, null, 2), (err) => {
        if (err) throw err;
        console.log("successfully deleted");
    })
    res.json(newData);
})
}  
