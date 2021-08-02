const express = require('express')
const app = express()
const port = 3000
const {readFileSync} = require('fs')

app.get('/', (req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write(readFileSync('sex.html'))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})