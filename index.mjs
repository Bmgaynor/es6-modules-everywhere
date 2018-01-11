import express from 'express'
import path from 'path'
const app = express()

app.use('/client', express.static(path.join('client')))
// app.use('/client', express.static(path.join(__dirname, 'client'))) // __withES6 modules is an issue

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
