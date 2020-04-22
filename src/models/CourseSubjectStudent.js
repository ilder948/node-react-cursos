import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubjectStudent = sequelize.define("coursesubjectstudent", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  courseSubjectId: {
    type: Sequelize.INTEGER,
    foreignKey: 'courseSubjectId',
    references: {
      model: 'CourseSubject',
      key: 'id'
    }
  },
  studentId: {
    type: Sequelize.INTEGER,
    foreignKey: 'studentId',
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
    foreignKey: 'courseSubjectStudentId'
  });
};

export default CourseSubjectStudent;
