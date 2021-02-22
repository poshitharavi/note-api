import { Sequelize } from "sequelize";
import db from "../config/database";

const Note = db.define(
  "note",
  {
    noteId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    achived: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
module.exports = Note;
