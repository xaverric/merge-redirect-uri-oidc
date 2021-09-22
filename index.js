const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const sourceFilePath = args[0];
const destinationFilePath = args[1];

const readFile = (filePath) => {
    let data;
    try {
        data = JSON.parse(fs.readFileSync(filePath));
    } catch (err) {
        data = null;
    }
    return data;
};

const mergeRedirectUriFromSourceDataIntoDestinationData = () => {
    let sourceFileData = readFile(sourceFilePath);
    let destinationFileData = readFile(destinationFilePath);

    destinationFileData.itemList.forEach(dstItem => {
        let sourceItemWithSameUri = sourceFileData.itemList.find(srcItem => srcItem.clientUri === dstItem.clientUri);
        if (sourceItemWithSameUri) {
            dstItem.redirectUriList = [...sourceItemWithSameUri.redirectUriList];
        }
    });

    fs.writeFileSync(`.${path.sep}result.json`, JSON.stringify(destinationFileData));
};

mergeRedirectUriFromSourceDataIntoDestinationData();