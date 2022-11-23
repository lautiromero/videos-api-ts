import "dotenv/config"
import mongoose from "mongoose"

const dbConn = process.env.DB_CONN

console.log(dbConn, `tipo: ${typeof(dbConn)}`)
try {
  mongoose.connect(dbConn)
    .then(() => {console.log('DB connected, ready.')})
} catch (e) {
  console.log(e)
}
