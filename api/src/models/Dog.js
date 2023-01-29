const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    height_max: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    weight_min: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    weight_max: {
      type: DataTypes.INTEGER,
      allownull: false,
    },
    life_span: {
      type: DataTypes.STRING,
      allownull: false,
    },
    image: {
      type: DataTypes.STRING,
      allownull: true
    },
    createInDB:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  },
  { timestamps: false }
  );
};


// [ ] Raza con las siguientes propiedades:
// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida
// [ ] Temperamento con las siguientes propiedades:
// ID
// Nombre