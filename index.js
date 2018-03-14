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
        outJSON.fileName = "";
        outJSON.Name = inJSON[i].Name;
        outJSON.Scientific_Name = inJSON[i].Scientific_Name;
        outJSON.Type = inJSON[i].Type;
        outJSON.Tags = inJSON[i].Tags;
        outJSON.Overview = inJSON[i].Overview;
        outJSON.Habitat = inJSON[i].Habitat;
        outJSON.References = inJSON[i].References;
        //fs.writeFileSync('json/'+collectionName+'.json',JSON.stringify(items));
        fs.writeFileSync('json/'+camelCase(inJSON[i].Name)+'.json',JSON.stringify(outJSON,null,'\t'));
    }

    //fs.writeFileSync('./SpeciesFix.json',JSON.stringify(inJSON[0]));
} catch (err) {
    console.error(new Error(err));
}