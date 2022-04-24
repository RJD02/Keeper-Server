const express = require("express");
const Note = require("../models/Note");

const router = express.Router();

router.get("/notes", async (req, res) => {
  console.log("Hit all notes");
  const notes = await Note.find();
  console.log(notes);
  res.send(notes);
});

router.post("/notes", async (req, res) => {
  console.log("Hit");
  const note = new Note({
    title: req.body.title,
    content: req.body.content,
    created: new Date(),
  });
  console.log(note);
  await note.save();
  res.json(note);
});

module.exports = router;
