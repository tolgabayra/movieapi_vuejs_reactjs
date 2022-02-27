const express = require("express")
const app = express()
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require("cors")
const env = require("./config/config")
const services = require("./services")
//--------------------------

const authRoute = require("./routes/auth")
const movieRoute = require("./routes/movie")

env.congifenv
services()

//------------------------
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(morgan("short"))

//-----------------------
app.use("/api/auth", authRoute)
app.use("/api/movie", movieRoute)


app.listen(process.env.APP_PORT,() => {
  console.log("Server is running!");
})