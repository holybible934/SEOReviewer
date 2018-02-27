var inputStreamName = process.argv[2]; // Config Input Stream from the 2nd argument when be executed

// Define number of rules and set non-applied to them all
var rules = [];
var ruleCount = 5;
for (i = 0;i < ruleCount; i++) {
  rules.push(false);
}

// StrongTag conditions
var strongTagLimit = 15;
var strongTagCount = 0;

// Number of h1 tag
var h1TagCount = 0;

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
console.log(`Type ruleX<ENTER> to apply rule X, where X no greater than ${ruleCount}.\nThen type . to start scanning.`);
rl.prompt();
rl.on('line', (line) => {
  switch (line.trim()) {
    case 'rule1':
      rules[0] = true;
      console.log('rule1 is applied');
      break;
    case 'rule2':
      rules[1] = true;
      console.log('rule2 is applied');
      break;
    case 'rule3':
      rules[2] = true;
      console.log('rule3 is applied');
      break;
    case 'rule4':
      rules[3] = true;
      console.log('rule4 is applied');
      break;
    case 'rule5':
      rules[4] = true;
      console.log('rule5 is applied');
      break;
    case '.':
      rl.close();
      break;
    default:
      break;
  }
}).on('close', function() {
  console.log('Input is finished. Start scanning');
  lineBuf.forEach(Scanning);
  if (strongTagCount > strongTagLimit) {
    console.log(`Total number of <strong> is ${strongTagCount}, which is more than limit ${strongTagLimit}`);
  }
  if (h1TagCount > 1) {
    console.log('This HTML has more than one <h1> tag');
  }
});

// Scan each line from ReadStream with applied rules
function Scanning(line, index) {
  if (rules[0]) {
    ImgWithoutAlt(line, index);
  }
  if (rules[1]) {
    HrefWithoutRel(line, index);
  }
  if (rules[2]) {
    LackTagsInHeader(line, index);
  }
  if (rules[3]) {
    CountStrongTags(line);
  }
  if (rules[4]) {
    CountH1Tag(line);
  }
}

function ImgWithoutAlt(line, index) {
  if ((line.toUpperCase().includes('<IMG')) && (line.includes('/>'))) {
    if (!line.toUpperCase().includes('ALT=')) {
      console.log(`Line#${index+1}: <img> tag without alt attribute`);
    }
  }
}

function HrefWithoutRel(line, index) {
  if ((line.toUpperCase().includes('<A')) && (line.includes('/>') || line.toUpperCase().includes('</A>'))) {
    if (!line.toUpperCase().includes('REL=')) {
      console.log(`Line#${index+1}: <a> tag without rel attribute`);
    }
  }
}

function LackTagsInHeader(line, index) {
  //console.log('LackTagsInHeader - Check tags in between <head></head>');
}

function CountStrongTags(line) {
  if (line.toUpperCase().includes('<STRONG>')) {
    strongTagCount++;
  }
}

function CountH1Tag(line) {
  if (line.toUpperCase().includes('<H1')) {
    h1TagCount++;
  }
}
