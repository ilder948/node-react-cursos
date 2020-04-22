import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubjectStudent = sequelize.define("coursesubjectstudent", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  fk_id_course_subject: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_course_subject',
    references: {
      model: 'CourseSubject',
      key: 'id'
    }
  },
  fk_id_student: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_student',
    references: {
      model: 'Student',
      key: 'id'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'courseSubjectStudent'
});
CourseSubjectStudent.associate = (models) => {
  CourseSubjectStudent.belongsToMany(models.Test, {
    through: 'CourseSubjectStudentTest',
    as: 'test',
    foreignKey: 'fk_id_course_subject_student'
  });
};
export default CourseSubjectStudent;
