import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import CourseSubjectStudentTest from './CourseSubjectStudentTest';

const Qualification = sequelize.define("qualification", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  qualification: {
    type: Sequelize.INTEGER,
  },
  courseSubjectStudentTestId: {
    type: Sequelize.INTEGER,
    foreignKey: 'courseSubjectStudentTestId',
    references: {
      model: 'CourseSubjectStudentTest',
      key: 'id'
    }
  }
}, {
  timestamps: false, 
  freezeTableName: true,
  tableName: 'qualification'
});

Qualification.hasMany(CourseSubjectStudentTest,{ foreignKey: 'id', sourceKey: 'courseSubjectStudentTestId' });
CourseSubjectStudentTest.hasOne(Qualification, { foreignKey: 'courseSubjectStudentTestId', sourceKey: 'id'});

export default Qualification;
