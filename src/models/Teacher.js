import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Teacher = sequelize.define("teacher", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'teacher'
});

export default Teacher;
