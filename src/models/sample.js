'use strict';

// this file basically tells javascript types like its blue print of schema where we give here also constraints but in javascript  type way like data types string , number , array like that
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sample extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sample.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Sample',
  });
  return Sample;
};