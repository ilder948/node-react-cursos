import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubject = sequelize.define("coursesubject", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  courseId: {
    type: Sequelize.INTEGER,
    foreignKey: 'courseId',
    references: {
      model: 'Course',
      key: 'id'
    }
  },
  subjectId: {
    type: Sequelize.INTEGER,
    foreignKey: 'subjectId',
    references: {
      model: 'Subject',
      key: 'id'
    }
  },
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'courseSubject'
});
CourseSubject.associate = (models) => {
  CourseSubject.belongsToMany(models.CourseSubjectStudent, {
    through: 'CourseSubjectStudent',
    as: 'student',
    foreignKey: 'studentId'
  });
};

export default CourseSubject;
