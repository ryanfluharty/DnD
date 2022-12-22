const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

const npcRouter = require("./npc");
app.use("/npc", npcRouter);

app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(3000);