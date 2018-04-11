'use strict';
const fs = require('fs');
const camelCase = require('camelcase');

let inJSON;
var outJSON = {};

try {
    inJSON = JSON.parse(fs.readFileSync('./Species.json', 'utf8'));
    console.log("Data parsed into inJSON");
    //console.log("inJSON.size: "+inJSON.length);

    if (!fs.existsSync('json'))
    {
        fs.mkdirSync('json');
    }
    for (var i=0; i<70; i++)
    {
        outJSON = {};
        outJSON.imageURL = "";
        outJSON.name = ""+inJSON[i].Name;
        outJSON.scientificName = ""+inJSON[i].Scientific_Name;
        outJSON.overview = ""+inJSON[i].Overview;
        outJSON.behavior = "";
        outJSON.habitat = ""+inJSON[i].Habitat;
        outJSON.size = "";
        outJSON.conservationStatus = "";
        outJSON.type = ""+inJSON[i].Type;
        outJSON.tags = ""+inJSON[i].Tags;
        outJSON.references = ""+inJSON[i].References;
        outJSON.versionNumber = 0;
        let names = camelCase(inJSON[i].Name);
        if (names.indexOf(',')>0)
        {
            names = names.substr(0,names.indexOf(','));
        }
        //fs.writeFileSync('json/'+collectionName+'.json',JSON.stringify(items));
        fs.writeFileSync('json/'+names+'.json',JSON.stringify(outJSON,null,'\t'));
    }

    //fs.writeFileSync('./SpeciesFix.json',JSON.stringify(inJSON[0]));
} catch (err) {
    console.error(new Error(err));
}
