import express from "express";
import {
  saveNoteController,
  getAllNotesController,
  getNoteByIdController,
  getAllAchivedNoteController,
  getAllUnachivedNoteController,
  updateNoteByIdController,
  updateNoteAsAchivedController,
  updateNoteAsUnachivedController,
  deleteNoteController,
} from "./note-controller";

const note = express.Router();

//routes for controllers
note.get("/", getAllNotesController);
note.get("/achived", getAllAchivedNoteController);
note.get("/unachived", getAllUnachivedNoteController);
note.get("/:id", getNoteByIdController);
note.post("/save", saveNoteController);
note.put("/update/:id", updateNoteByIdController);
note.put("/achive/:id", updateNoteAsAchivedController);
note.put("/unachive/:id", updateNoteAsUnachivedController);
note.delete("/delete/:id", deleteNoteController);

export default note;
