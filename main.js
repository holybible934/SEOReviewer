var SeoRules = {
  ImgWithoutAlt: function() {
    var fileStream = require('fs'),
        filename = 'test.html';
    fileStream.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      console.log('OK' + filename);
      console.log(data);
    });
    console.log('ImgWithoutAlt - CHeck image without alt attribute');
  }
}

SeoRules.ImgWithoutAlt();
