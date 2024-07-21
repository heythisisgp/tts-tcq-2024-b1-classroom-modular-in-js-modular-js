
const { MajorColorNames, MinorColorNames, ColorPair } = require('./colors');

function getColorFromPairNumber(pairNumber) {
    const minorSize = MajorColorNames.length;
    const majorSize = MinorColorNames.length;

    if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
        throw new Error(`Argument PairNumber: ${pairNumber} is outside the allowed range`);
    }

    const zeroBasedPairNumber = pairNumber - 1;
    const majorIndex = Math.floor(zeroBasedPairNumber / minorSize);
    const minorIndex = zeroBasedPairNumber % minorSize;
    
    const pair = new ColorPair();
    pair.majorColor = MajorColorNames[majorIndex];
    pair.minorColor = MinorColorNames[minorIndex];
    return pair;
}

function getPairNumberFromColor(pair) {
    const majorIndex = MajorColorNames.indexOf(pair.majorColor);
    const minorIndex = MinorColorNames.indexOf(pair.minorColor);

    if (majorIndex === -1 || minorIndex === -1) {
        throw new Error(`Unknown Colors: ${pair.toString()}`);
    }

    return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
}

module.exports = { getColorFromPairNumber, getPairNumberFromColor };
