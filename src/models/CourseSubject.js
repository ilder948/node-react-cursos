import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const CourseSubject = sequelize.define("coursesubject", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  fk_id_course: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_course',
    references: {
      model: 'Course',
      key: 'id'
    }
  },
  fk_id_subject: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_subject',
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
    foreignKey: 'fk_id_student'
  });
};

export default CourseSubject;
