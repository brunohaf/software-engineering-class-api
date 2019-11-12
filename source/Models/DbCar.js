const sequelize = require('../Models/sequelize');
//const DataTypes = require('mysql');

/*module.exports = sequelize.define('carro', {
    cor_carro: DataType.STRING,
    placa: DataType.STRING,
    categoria: DataType.STRING,
    modelo: DataType.STRING,
    fabricante: DataType.STRING,
});
*/
module.exports = (sequelize, type) => {
    return sequelize.define('carro', {
        idcarro: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cor_carro: type.STRING,
        placa: type.STRING,
        categoria: type.STRING,
        modelo: type.STRING,
        fabricante: type.STRING
    });
}
