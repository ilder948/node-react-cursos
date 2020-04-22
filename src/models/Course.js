import Sequelize from "sequelize";
import { sequelize } from "../database/database";

import Teacher from './Teacher';

const Course = sequelize.define("course", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
  },
  teacherId: {
    type: Sequelize.INTEGER,
    foreignKey: 'teacherId'
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
    foreignKey: 'subjectId'
  });
};

Course.hasMany(Teacher,{ foreignKey: 'id', sourceKey: 'teacherId' });
Teacher.hasOne(Course, { foreignKey: 'teacherId', sourceKey: 'id'});

export default Course;
