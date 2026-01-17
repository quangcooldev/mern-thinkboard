import express from "express";
import {
  getAllNodes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNodes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
