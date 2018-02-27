var inputStreamName = process.argv[2]; // Config Input Stream from the 2nd argument when be executed
var rules = [];
var ruleCount = 5;
for (i = 0;i < ruleCount; i++) {
  rules.push(false);
}
var StrongTagLimit = 15;

// ReadStream handler
var lineBuf = [];
var lineCount = 0;
const readFileLine = require('readline');
const fileStream =  require('fs');
const filerl = readFileLine.createInterface({
  input: fileStream.createReadStream(inputStreamName),
  crlfDelay: Infinity
});
filerl.on('line', (line) => {
  lineBuf.push(line);
  lineCount++;
}).on('close', () => {
});

// Ask users to select which rule(s) shall be applied
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
  terminal: false
});
console.log('Type ruleX<ENTER> to execute rule X, where X is 1, 2, 3, 4 or 5.\nThen type any to start scanning.')
rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    case 'rule1':
      rules[0] = true;
      console.log('rule1 is set');
      break;
    case 'rule2':
      rules[1] = true;
      break;
    case 'rule3':
      rules[2] = true;
      break;
    case 'rule4':
      rules[3] = true;
      break;
    case 'rule5':
      rules[4] = true;
      break;
    default:
      rl.close();
      break;
  }
}).on('close', function() {
  console.log('Input is finished. Start scanning');
  lineBuf.forEach(Scanning);
});



function Scanning(line, index) {
  if (rules[0]) {
    ImgWithoutAlt(line);
  }
  if (rules[1]) {
    HrefWithoutRel(line);
  }
  if (rules[2]) {
    LackTagsInHeader(line, index);
  }
  if (rules[3]) {
    CountStrongTags(line);
  }
  if (rules[4]) {
    TooManyH1(line);
  }
}


function ImgWithoutAlt(line) {
  console.log('ImgWithoutAlt - Check image without alt attribute');
}

function HrefWithoutRel(line) {
  console.log('HrefWithoutRel - Check a href link without rel attribute');
}

function LackTagsInHeader(line, index) {
  console.log('LackTagsInHeader - Check tags in between <head></head>');
}

function CountStrongTags(line) {
  console.log('CountStrongTags');
}

function TooManyH1(line) {
  console.log('TooManyH1');
}
