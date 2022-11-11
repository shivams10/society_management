const express = require ("express");
const cors = require("cors");
const router = require('./routes/usersRouter.js')
const resourcesRouter = require("./routes/resourceRouter.js")
const occupanciesRouter = require("./routes/occupanciesRouter.js")
const {authticateDb} = require('./models/index');
const cookieParser = require('cookie-parser');

const app = express();


authticateDb();

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use("/api", resourcesRouter);
app.use("/api", occupanciesRouter);


app.get("/", (req,res) => {
     res.json({message: "Heloo"})
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running o ${PORT}`);
})