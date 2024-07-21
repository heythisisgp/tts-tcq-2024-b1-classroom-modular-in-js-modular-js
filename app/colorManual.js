const { MajorColorNames, MinorColorNames } = require('./colors');

function generateColorManual() {
    let manual = '';
    let pairNumber = 1;

    for (const majorColor of MajorColorNames) {
        for (const minorColor of MinorColorNames) {
            manual += `Pair Number: ${pairNumber} -> Major Color: ${majorColor}, Minor Color: ${minorColor}\n`;
            pairNumber++;
        }
    }

    return manual;
}

module.exports = { generateColorManual };
