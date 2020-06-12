module.exports = (modmail, Sequelize, database) => {
    /** MODELS */
    try  {
        database.define('tickets', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            authorID:  {
                type: Sequelize.STRING,
                allowNull: false
            },
            firstMessage: {
                type: Sequelize.STRING,
                allowNull: false
            },
            opened: {
                type: Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            channelID: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });

        database.sync();
        return database.models;
    } catch (e) {
     modmail.logger(e, 'error')
    }
};