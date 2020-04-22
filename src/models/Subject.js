import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Subject = sequelize.define("subject", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'subject'
});
Subject.associate = (models) => {
  Subject.belongsToMany(models.Course, {
    through: 'CourseSubject',
    as: 'course',
    foreignKey: 'courseId'
  });
};

export default Subject;
