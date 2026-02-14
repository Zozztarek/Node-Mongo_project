import express from "express";
import Note from "../database/note.model.js";

const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        const note = await Note.create({
            title,
            content,
            user: userId
        });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const notes = await Note.find().populate("user"); 
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
