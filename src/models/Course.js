import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Teacher from './Teacher';

const Course = sequelize.define("course", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  fk_id_teacher: {
    type: Sequelize.INTEGER,
    foreignKey: 'fk_id_teacher'
  },
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'course'
});
Course.associate = (models) => {
  Course.belongsToMany(models.CourseSubject, {
    through: 'CourseSubject',
    as: 'subject',
    foreignKey: 'fk_id_subject'
  });
};

Course.hasMany(Teacher,{ foreignKey: 'fk_id_teacher', sourceKey: 'id' });
Teacher.belongsTo(Course, { foreignKey: 'fk_id_teacher', sourceKey: 'id'});

export default Course;
