module.exports = (sequelize, type) => {
    return sequelize.define('reserva_carro', {
        idreserva_carro: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        idcliente: type.INTEGER,
        idcarro: type.INTEGER,
        idlocadora: type.INTEGER,
        dt_inicio_reserva: type.DATE,
        dt_fim_reserva: type.DATE,
        reservado: type.BOOLEAN,
        cidade: type.STRING
        },
        {
            timestamps: false
        }
        
)};
