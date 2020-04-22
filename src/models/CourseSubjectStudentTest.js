import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubjectStudentTest = sequelize.define("coursesubjectstudenttest", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  courseSubjectStudentId: {
    type: Sequelize.INTEGER,
    foreignKey: 'courseSubjectStudentId',
    references: {
      model: 'CourseSubjectStudent',
      key: 'id'
    }
  },
  testId: {
    type: Sequelize.INTEGER,
    foreignKey: 'testId',
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
