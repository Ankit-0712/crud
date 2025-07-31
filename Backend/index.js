const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const cors = require('cors');
require('./config/dbConnection')

app.use(express.json());
app.use(cors({
    origin:'http://localhost:4200'
}));
app.get("/", (req,res)=>{
    res.send("Api Working");
});

app.post('/test', (req, res) => {
    res.json({ msg: "Test POST route working", body: req.body });
});
const users = require('./routes/users')
app.use('/api',users);

app.listen(PORT,()=>{
    console.log("server running on Port", PORT);
});