const fs = require('fs')
const express = require('express')
const server = express()
const port = 7000


server.get('/', (req, res) => {
    res.send('Ответ от сервера');
})
server.get('/help', (req, res) => {
    res.send('<h1>Help</h1>');
})
server.listen(port, () => {
    console.log(`server is running on port ${port}!`);
});

// server.use(express.static('../app/dist'))

let user = {"name": "Alex", "age": "15"}
fs.writeFile('base.json', JSON.stringify(user), (error) => {
    if (error) {
        console.log(error)
    }
})

let Users = fs.readFile('base.json', 'UTF-8', (error, data) => {
        if (error) {
            console.log(error)
        }
        let users = []
        users.push(JSON.parse(data))
        users.push(user)
        fs.writeFile('newfile.json', JSON.stringify(users), (error) => {
            if (error) {
                console.log(error)
            }
        })
        console.log(users)
    }
)
