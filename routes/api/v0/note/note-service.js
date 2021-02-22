import Note from "../../../../models/note";

/**
 * Note saving service
 * @param data
 */
export const saveNote = async (data) => {
  return await Note.create({
    description: data.description,
  });
};

/**
 * Get all notes saved (service)
 */
export const getAllNotes = async () => {
  return await Note.findAll();
};

/**
 * Get note details by id (service)
 * @param id
 */
export const getNoteById = async (id) => {
  return await Note.findOne({ where: { noteId: id } });
};

/**
 * Get all achived = true notes (service)
 */
export const getAllAchivedNote = async () => {
  return await Note.findAll({ where: { achived: true } });
};

/**
 * Get all achived = false notes (service)
 */
export const getAllUnAchivedNote = async () => {
  return await Note.findAll({ where: { achived: false } });
};

/**
 * Update description by note id (service)
 * @param id
 * @param data
 */
export const updateNoteById = async (id, data) => {
  const updateStatus = await Note.update(
    {
      description: data.description,
    },
    {
      where: {
        noteId: id,
      },
    }
  );

  if (updateStatus[0] === 1)
    return await Note.findOne({ where: { noteId: id } });

  throw new Error("Note id is not found");
};

/**
 * Update note as achived (service)
 * @param id
 */
export const updateNoteAsAchived = async (id) => {
  const updateStatus = await Note.update(
    {
      achived: true,
    },
    {
      where: {
        noteId: id,
      },
    }
  );

  if (updateStatus[0] === 1)
    return await Note.findOne({ where: { noteId: id } });

  throw new Error("Note id is not found");
};

/**
 * Update note as unachived (service)
 * @param id
 */
export const updateNoteAsUnachived = async (id) => {
  const updateStatus = await Note.update(
    {
      achived: false,
    },
    {
      where: {
        noteId: id,
      },
    }
  );

  if (updateStatus[0] === 1)
    return await Note.findOne({ where: { noteId: id } });

  throw new Error("Note id is not found");
};

/**
 * Delete note by id (service)
 * @param id
 */
export const deleteNote = async (id) => {
  const deleteStatus = await Note.destroy({ where: { noteId: id } });

  if (deleteStatus == 1) {
    return { message: "Successfully deleted" };
  }

  throw new Error("Deleted unsuccessfull");
};
