var StrongTagLimit = 15;

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',
  terminal: false
});

console.log('Type rule1<ENTER> to execute rule1')
rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'rule1':
      ImgWithoutAlt();
      break;
    case 'rule2':
      HrefWithoutRel();
      break;
    default:
      break;
  }
  rl.prompt();
})
/*
rl.question('Do you want to enable rule1? If yes, type y\n', function(choice) {
  if (choice === 'y') {
    ImgWithoutAlt();
  }
});



rl.question('Do you want to enable rule2? If yes, type y\n', function(choice) {
  if (choice === 'y') {
    HrefWithoutRel();
  }
});
*/

function ImgWithoutAlt() {
    var fileStream = require('fs'),
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
