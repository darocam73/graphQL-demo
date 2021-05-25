'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Actor, { through: 'Movie_Actor' });
      Movie.belongsTo(models.Genre, { foreignKey: { name: 'genreId' }});
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    rating: DataTypes.FLOAT(3,1),
    duration: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};