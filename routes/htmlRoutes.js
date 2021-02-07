// dependencies

const path = require("path");

module.exports = (app) => {

// get route to send users to notes.html in public directory    
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

// get route to send users to home page

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

// default to home page

    app.get('', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    })
};