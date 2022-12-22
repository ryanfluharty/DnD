const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));

let npc = {1: "Jeff"};

app.get("/", (req, res) => {
    res.send("Hello")
});

app.get("/npc", (req, res) => {
    res.send(npc)
});

app.get("/npc/:id", (req, res) => {
    let id = req.params.id
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    res.send(currentNpc)
});

app.post("/npc/:id", (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let currentNpc = npc[id]
    if(currentNpc != null) {
        res.status(400).json({message: `NPC with ID ${id} already exists`})
    }
    npc[id] = name
    res.status(201).json({message: `NPC with ID ${id} and name ${name} created`})
});

app.put("/npc/:id", (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    npc[id] = name
    res.send(`User with ID ${id} updated to name ${name}`)
})

app.delete("/npc/:id", (req, res) => {
    let id = req.params.id
    let name = npc[id]
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    delete npc[id]
    res.send(`NPC ${name} with ID ${id} removed successfully`)
})

app.listen(3000);