const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log(res.statusCode);
    // res.send("Hello Express.js World")
    res.send("Hello Express.js World")
})

app.post('/profile', (req, res) => {

    res.send("Profile Page is Opened")
})

app.put('/profile1', (req, res) => {

    res.send("Profile 2 page is opened")
})

app.delete('/profile3', (req, res) => {
    res.send("Delete command hello world")

})

app.listen(3000, () => {

    console.log("Our first Express app is running at local host 3000")
})