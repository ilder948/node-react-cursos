import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Student = sequelize.define("student", {
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
  tableName: 'student'
});
Student.associate = (models) => {
  Student.belongsToMany(models.CourseSubjectStudent, {
    through: 'CourseSubject',
    as: 'coursesubject',
    foreignKey: 'fk_id_course_subject'
  });
};

export default Student;
