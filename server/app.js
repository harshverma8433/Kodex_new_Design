const express = require("express")
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended:true}))



//routes
app.use("/" , require("./routes/user.route.js"))
app.use("/" , require("./routes/otp.route.js"))
app.use("/" , require("./routes/form.route.js"))
app.use("/" , require("./routes/contact.route.js"))
module.exports = app;