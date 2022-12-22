const express = require("express");
const router = express.Router();

let npc = {1: "Jeff"};

router.get("/", (req, res) => {
    res.send(npc)
});

router.get("/:id", (req, res) => {
    let id = req.params.id
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    res.send(currentNpc)
});

router.post("/:id", (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let currentNpc = npc[id]
    if(currentNpc != null) {
        res.status(400).json({message: `NPC with ID ${id} already exists`})
    }
    npc[id] = name
    res.status(201).json({message: `NPC with ID ${id} and name ${name} created`})
});

router.put("/:id", (req, res) => {
    let id = req.params.id
    let name = req.body.name
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    npc[id] = name
    res.send(`User with ID ${id} updated to name ${name}`)
})

router.delete("/:id", (req, res) => {
    let id = req.params.id
    let name = npc[id]
    let currentNpc = npc[id]
    if(currentNpc == null) {
        res.status(404).json({message: `No NPC with ID ${id}`})
    }
    delete npc[id]
    res.send(`NPC ${name} with ID ${id} removed successfully`)
})

module.exports = router;