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
        fabricante: type.STRING,
        ano: type.STRING
        },
        {
            timestamps: false
        }
        
)};
