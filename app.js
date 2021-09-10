const express = require('express')
const app = express()
const cors = require('cors') // includes cors 
const exphbs = require('express-handlebars')
const db = require('./config/database')
    // const { Pool, Client } = require('pg')
const questions = require('./router/question')
const dotenv = require('dotenv')

dotenv.config()


const apis = process.env.API_URL

app.use(cors()) // We're telling express to use CORS
app.use(express.json()) // we need to tell server to use json as well
app.use(`${apis}`, questions) // tells the server to use the routes in routes.js


db.authenticate().then(() => console.log('Database connected....'))
    .catch(err => console.log('Error:' + err))

// const connectionString = 'postgresql://postgres:Mukhtar2944@localhost:5432/trusoftng'
// const pool = new Pool({
//     connectionString,
// })
// pool.query('connect', () => {
//     console.log('connected to the db');
// });


// pool.query('SELECT * FROM questions', (err, res) => {
//     console.log(err, res)
//     pool.end()
// })
app.listen(process.env.PORT || 3000)