import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Student = sequelize.define("student", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
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
  tableName: 'student'
});
Student.associate = (models) => {
  Student.belongsToMany(models.CourseSubjectStudent, {
    through: 'CourseSubject',
    as: 'coursesubject',
    foreignKey: 'courseSubjectId'
  });
};

export default Student;
