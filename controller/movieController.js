const express = require("express");
const Movie = require("../model/movieModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const movie = await Movie.find().lean().exec();
    res.status(201).json({ movie });
  } catch {
    res.status(400).json("bad request");
  }
});
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id)
      .lean()
      .exec();
    res.status(201).json({ movie });
  } catch {
    res.status(400).json("bad request");
  }
});
router.get("/:movietitle", async (req, res) => {
  try {
    const movie = await Movie.find({ "title": req.params.movietitle })
      .lean()
      .exec();
    res.status(201).json({ movie });
  } catch {
    res.status(400).json("bad request");
  }
});
router.post("/", async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json({ movie });
  } catch (er) {
    res.status(400).json({ er });
  }
});
router.delete("/", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    res.status(201).json({ movie });
  } catch (er) {
    res.status(400).json({ er });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({ movie });
  } catch (er) {
    res.status(400).json({ er });
  }
});
module.exports = router;
