var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var stripComments = require('strip-json-comments');

module.exports.loadConfig = function(configPath) {
  var file = fs.readFileSync(path.join(__dirname, configPath), 'utf8');
  var config = yaml.safeLoad(stripComments(file));
  return config;
};
