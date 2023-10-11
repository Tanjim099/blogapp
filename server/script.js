const express = require("express");
const { connectDB } = require("./config/dbConnection");
const { blogRoute } = require("./routes/blogRoute");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const { userRoute } = require("./routes/userRoute");
const errorMiddleware = require("./middlewares.js/error.middleware");
const morgan = require("morgan");
require("dotenv").config()
const app = express();

const PORT = 8000;

const corsOptions = {
    origin: 'http://127.0.0.1:5174/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and HTTP authentication to be sent cross-origin
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on 204
};
app.use(cors(corsOptions));


app.use(morgan('dev'))
app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    res.status(200).send({
        message: "server is running"
    })
})

app.use("/api/v1/blog", blogRoute);

// user route
app.use("/api/v1/user", userRoute);

// database connect
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use(errorMiddleware)