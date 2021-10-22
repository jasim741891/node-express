const express = require('express')
const app = express()
var cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())
const users = [
    { id: 1, name: "jamala khatoun", email: "jamala@gmail.com", phone: "0174444444" },
    { id: 2, name: "kamala khatoun", email: "jamala@gmail.com", phone: "0174444444" },
    { id: 3, name: "samala khatoun", email: "jamala@gmail.com", phone: "0174444444" },
    { id: 4, name: "kamala khatoun", email: "jamala@gmail.com", phone: "0174444444" },
    { id: 5, name: "jamala khatoun", email: "jamala@gmail.com", phone: "0174444444" },
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users)
    }

});

// post
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log("hiting", req.body)
    res.json(newUser)
})





app.get('/users/:id', (req, res) => {
    const name = req.params.id;
    const user = users[name];
    res.send(user)
})

app.get('/', (req, res) => {
    res.send('Jasim uddin as a desing but he is not !')
})



app.listen(port, () => {
    console.log("listening to port", port)
})