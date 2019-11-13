module.exports = (sequelize, type) => {
    return sequelize.define('locadora', {
        idlocadora: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nm_locadora: type.STRING,
        cnpj: type.INTEGER,
        endereco: type.STRING
        },
        {
            timestamps: false
        }
        
)};
