import to from "await-to-js";
import {
  saveNote,
  getAllNotes,
  getNoteById,
  getAllAchivedNote,
  getAllUnAchivedNote,
  updateNoteById,
  updateNoteAsAchived,
  updateNoteAsUnachived,
  deleteNote,
} from "./note-service";

/**
 * Save notes function
 * @param req
 * @param res
 */
export const saveNoteController = async (req, res) => {
  const { body } = req; // retreving the request body

  const [err, note] = await to(saveNote(body)); //passing body data to note service

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Get all notes controller
 * @param req
 * @param res
 */
export const getAllNotesController = async (req, res) => {
  const [err, note] = await to(getAllNotes()); //passing body data to note service

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Get note by id
 * @param req
 * @param res
 */
export const getNoteByIdController = async (req, res) => {
  const { id } = req.params;
  const [err, note] = await to(getNoteById(id));

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Get all achived = true notes controller
 * @param req
 * @param res
 */
export const getAllAchivedNoteController = async (req, res) => {
  const [err, note] = await to(getAllAchivedNote());

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Get all achived = false notes controller
 * @param req
 * @param res
 */
export const getAllUnachivedNoteController = async (req, res) => {
  const [err, note] = await to(getAllUnAchivedNote());

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Update note description controller
 * @param req
 * @param res
 */
export const updateNoteByIdController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const [err, note] = await to(updateNoteById(id, body));

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Update note as achived controller
 * @param req
 * @param res
 */
export const updateNoteAsAchivedController = async (req, res) => {
  const { id } = req.params;

  const [err, note] = await to(updateNoteAsAchived(id));

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Update note as unachived controller
 * @param req
 * @param res
 */
export const updateNoteAsUnachivedController = async (req, res) => {
  const { id } = req.params;

  const [err, note] = await to(updateNoteAsUnachived(id));

  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

/**
 * Delete note by id controller
 * @param req
 * @param res
 */
export const deleteNoteController = async (req, res) => {
  const { id } = req.params;

  const [err, note] = await to(deleteNote(id));
  console.log(err);
  if (!err) {
    return res.json(note);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
