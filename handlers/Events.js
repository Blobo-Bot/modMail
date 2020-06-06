const {readdir} = require('fs'),
    chalk = require('chalk')

/**
 * @author Sora
 * @param client
 * @return {Promise<void>}
 */
module.exports = async (client) => {
    readdir("./events/", (err, content) => {
        if (err) console.log(err);
        if (content.length < 1) return;
        let groups = [];
        for (let element of content){
            if (!element.includes('.')) groups.push(element);
        }
        for (const folder of groups) {
            readdir("./events/" + folder, (e, files) => {
                let eventFile = files.filter(f => f.split(".").pop() === "js");
                if (eventFile.length < 1) return;
                if (e) console.log(e);
                for (const element of eventFile) {
                    let props = im('./events/' + folder + '/' + element);
                    console.log(`${chalk.green('[LOAD]')} ${chalk.blue(element.split('.')[0])} ${chalk.yellow('EVENT')}`)
                    client.on(element.split('.')[0], props.bind(null, client));
                }
            });
        }
    });
}