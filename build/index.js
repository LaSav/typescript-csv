"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
// enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
let arsenalWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
        arsenalWins++;
    }
    else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
        arsenalWins++;
    }
}
console.log(`Arsenal won ${arsenalWins} games`);
