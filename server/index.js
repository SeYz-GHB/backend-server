const express = require('express');
const cors = require("cors");
const app  = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req,res) => {
    res.send('hell')
});
app.listen(PORT, () => {
    console.log("backend is runing on port 5000")
})