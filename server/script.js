const express = require("express");
const { connectDB } = require("./config/dbConnection");
const { blogRoute } = require("./routes/blogRoute");
const cors = require("cors")
const app = express();

const PORT = 8000;

const corsOptions = {
    origin: 'http://localhost:5173/', // Replace with your allowed origin(s)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies and HTTP authentication to be sent cross-origin
    optionsSuccessStatus: 204, // Some legacy browsers (IE11) choke on 204
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    res.status(200).send({
        message: "server is running"
    })
})

app.use("/api/v1/blog", blogRoute);

// database connect
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})