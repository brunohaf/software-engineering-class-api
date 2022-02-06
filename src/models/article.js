module.exports = (sequelize, type) => {
    return sequelize.define('article_web', {
        id_article: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        id_author: type.INTEGER,
        id_theme: type.INTEGER,
        content: type.STRING,
        star_score: type.INTEGER,
        publish_date: type.DATE,
        update_date: type.DATE,
        comment_count: type.INTEGER
        },
        {
            timestamps: false
        }
        
)};
