
const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];

const MinorColorNames = [
    "BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

class ColorPair {
    constructor() {
        this.majorColor = null;
        this.minorColor = null;
    }

    toString() {
        return `MajorColor: ${this.majorColor}, MinorColor: ${this.minorColor}`;
    }
}

module.exports = { MajorColorNames, MinorColorNames, ColorPair };
