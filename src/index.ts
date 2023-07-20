import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

// enum - enumeration
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let arsenalWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Arsenal' && match[5] === MatchResult.HomeWin) {
    arsenalWins++;
  } else if (match[2] === 'Arsenal' && match[5] === MatchResult.AwayWin) {
    arsenalWins++;
  }
}

console.log(`Arsenal won ${arsenalWins} games`);
