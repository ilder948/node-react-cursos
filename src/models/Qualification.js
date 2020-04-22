import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import CourseSubjectStudentTest from './CourseSubjectStudentTest';

const Qualification = sequelize.define("qualification", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  qualification: {
    type: Sequelize.INTEGER,
  },
  fk_id_course_subject_student_test: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_course_subject_student_test',
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

Qualification.hasMany(courseSubjectStudentTest,{ foreignKey: 'fk_id_course_subject_student_test', sourceKey: 'id' });
CourseSubjectStudentTest.belongsTo(Qualification, { foreignKey: 'fk_id_test', sourceKey: 'id'});

export default Qualification;
