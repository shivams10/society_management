const express = require ("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

app.get("/", (req,res) => {
     res.json({message: "Heloo"})
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running o ${PORT}`);
})