const path = require ('path');
const fs = require('fs');
const shortid = require('shortid');
const jsonData = require('../db/db.json');
const jsonDataDir = path.resolve(__dirname, "../db/db.json");

module.exports = (app) => {

app.get('/api/notes',  (req, res) => res.json(jsonData));

app.post('/api/notes', (req, res) => {
    let newNote = {
       title:  req.body.title,
       text:  req.body.text,
       id:  shortid.generate()
      }
    jsonData.push(newNote);
    fs.readFile(jsonDataDir, 'utf8', (err, data) => {
        if (err) throw err;
        else {  
          parsed = JSON.parse(data);
          parsed.push(note); 

        fs.writeFile(databaseDir, JSON.stringify(parsed, null, 2),'utf8', (err) => {
          if (err) throw err
          else { console.log("success!")}
        });
      };
      newData = fs.readFile(jsonDataDir, 'utf8', (err, data) =>{
        if (err) throw err
      res.json(newData);
    });
  });
})
app.delete(`/api/notes/:id`, (req, res) => {

  let deleteID = req.params.id;

    let newData = [];

    fs.readFile(jsonDataDir, 'utf8', (err, result) => {
      if(err) throw err;
      parseDelete = JSON.parse(res);
      res.send(result)

      for (let i = 0; i < result.length; i++) {
        if (result[i].id === deleteID) {
            console.log(result[i]);
            result.splice([i], 1);
        };
    };
  }) 

      fs.writeFile(jsonDataDir, JSON.stringify(result, null, 2), (err) => {
        if (err) throw err;
        console.log("successfully deleted");
    })
    res.json(newData);
})
}  
