import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubjectStudentTest = sequelize.define("coursesubjectstudenttest", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  fk_id_course_subject_student: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_course_subject_student',
    references: {
      model: 'CourseSubjectStudent',
      key: 'id'
    }
  },
  fk_id_test: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_test',
    references: {
      model: 'Test',
      key: 'id'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'courseSubjectStudentTest'
});


export default CourseSubjectStudentTest;
