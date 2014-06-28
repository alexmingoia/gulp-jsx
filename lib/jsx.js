var through = require('through2').obj;
var jsx = require('virtual-dom-jsx');

module.exports = function(options) {
  return through(function write (file, enc, next) {
    if (file.isNull()) return next();

    if (file.path.match(/js$/i)) {
      if (file.isStream()) {
        var data = '';
        file.contents.on('data', function(chunk) {
          data += chunk.toString('utf8');
          console.log(data);
        });
        file.contents.on('end', function() {
          file.contents = jsx.parse(data, options);
          next();
        });
        return this.push(file);
      }

      if (file.isBuffer()) {
        file.contents = new Buffer(
          jsx.parse(file.contents.toString('utf8'), options)
        );
      }
    }

    this.push(file);

    next();
  });
};
