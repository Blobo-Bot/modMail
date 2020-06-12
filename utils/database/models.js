module.exports = (options) => {
    /** MODELS */
    try  {
        options.client.database.define('tickets', {
            id: {
                type: options.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            authorID:  {
                type: options.Sequelize.STRING,
                allowNull: false
            },
            firstMessage: {
                type: options.Sequelize.STRING,
                allowNull: false
            },
            opened: {
                type: options.Sequelize.INTEGER,
                allowNull: false,
                defaultValue: 1
            },
            channelID: {
                type: options.Sequelize.INTEGER,
                allowNull: false
            }
        });

        options.client.database.sync();
        return options.client.models;
    } catch (e) {
        options.client.logger(e, 'error')
    }
};