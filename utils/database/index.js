const Sequelize = im('sequelize');
module.exports = async (modmail) => {
    let URL = await modmail.dataUTILS.creteURL();
    console.log(URL)
};
