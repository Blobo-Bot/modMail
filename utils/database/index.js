const Sequelize = im('sequelize');
module.exports = async (modmail) => {
    let URL = await modmail.dataUTILS.creteURL();
    modmail.database = new Sequelize(URL, {
        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
            timestamps: true
        },
        logging: false
    });

    await modmail.database.authenticate().then(() => {
        im('./utils/database/models')(modmail, Sequelize, modmail.database);
        modmail.logger('database conected !', 'log')
    }).catch(O_o => {
        throw O_o;
    });
};
