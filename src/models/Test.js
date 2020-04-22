import Sequelize from "sequelize";
import { sequelize } from "../database/database";

const Test = sequelize.define("test", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  }
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'test'
});
Test.associate = (models) => {
  Test.belongsToMany(models.CourseSubjectStudent, {
    through: 'CourseSubjectStudentTest',
    as: 'coursesubjectstudent',
    foreignKey: 'fk_id_test'
  });
};

export default Test;
