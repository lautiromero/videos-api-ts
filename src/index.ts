import * as express from "express"
import "dotenv/config"
import * as bodyParser from "body-parser"
/**---*/
import Routes from './routes'
import "./config/db"

const app = express()
const PORT = process.env.PORT || 3001

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/', Routes)


app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)})