/**
 * This script is used to combine all of the item meta .json files from
 * the Rust game directory "<drive>:\SteamLibrary\steamapps\common\Rust\Bundles\items"
 * into a single items.json file to be used in this project.
 */

const fs = require('fs');

var items = [];

// iterate each file in current directory
fs.readdirSync('.').forEach(file => {

    // check if file is item meta file
    if(file.endsWith('.json')){

        // read item meta
        var item = JSON.parse(fs.readFileSync(file));

        // push item meta we want to keep
        items.push({
            id: item.itemid,
            shortname: item.shortname,
            name: item.Name,
            description: item.Description,
        });

    }

});

// write formatted json to items.json
fs.writeFileSync('items.json', JSON.stringify(items, null, 4));