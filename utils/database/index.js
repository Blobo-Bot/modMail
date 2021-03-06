const Sequelize = im('sequelize');
module.exports = async (options = Object) => {
    let URL = await options.client.Tools.creteURL();
    options.client.database = new Sequelize(URL, {
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        },
        logging: false
    });

    await options.client.database.authenticate().then(() => {
        im('./utils/database/models')({
            client: options.client,
            Sequelize: Sequelize,
            database: options.client.database
        });
        options.client.logger('database conected !', 'log')
    }).catch(O_o => {
        throw O_o;
    });
};