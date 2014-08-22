var Handlebars = require('handlebars');
var through = require('through');

var hbsify = function(file) {
  var exts = ['hbs', 'handlebars'];
  var data = '';  

  var write = function(buf) {
    data += buf;
  };

  var end = function() {
    var precomp = Handlebars.precompile(data);
    var template = 'var Handlebars = require("hbsify").runtime;\n';
    template += 'module.exports = Handlebars.template(' + precomp.toString() + ');\n';
    this.queue(template);
    this.queue(null); 
  };

  if (exts.indexOf(file.split('.').pop()) < 0) return through();

  return through(write, end);
};

module.exports = hbsify;
module.exports.runtime = require('handlebars/runtime')["default"];
