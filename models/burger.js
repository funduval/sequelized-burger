
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
   name: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burgers;
};