import express from 'express'
import path from 'path'
const basePath = process.cwd()
const app = express()

app.use('/client', express.static(path.join(basePath, 'client')))
// app.use('/client', express.static(path.join(__dirname, 'client'))) // __withES6 modules is an issue

app.get('/', (req, res) => res.sendFile(path.join(basePath, 'index.html')))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
