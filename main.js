var StrongTagLimit = 15;
var inputStreamName = process.argv[2]; // Config Input Stream from the 2nd argument when be executed
var buf = '';
var rules = [];
var ruleCount = 5;
for (i = 0;i < ruleCount; i++) {
  rules.push(false);
}

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
  process.exit(0);
});

const readFileLine = require('readline');
const fileStream =  require('fs');
const filerl = readFileLine.createInterface({
  input: fileStream.createReadStream(inputStreamName),
  crlfDelay: Infinity
});


filerl.on('line', (line) => {
  buf += line;
});

function ImgWithoutAlt() {
  var fileStream = require('fs');
  filename = 'test.html';
  fileStream.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    // TODO - Detect if any <img /> tag without alt attribute
  });
  console.log('ImgWithoutAlt - Check image without alt attribute');
}

function HrefWithoutRel() {
  var fileStream = require('fs'),
      filename = 'test.html';
  fileStream.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    // TODO - Detect if any <a /> tag without rel attribute
  });
  console.log('HrefWithoutRel - Check a href link without rel attribute');
}
