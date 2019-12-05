module.exports = (sequelize, type) => {
    return sequelize.define('cliente', {
        idcliente: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nm_cliente: type.STRING,
        cpf: type.STRING
        },
        {
            timestamps: false
        }
        
)};
