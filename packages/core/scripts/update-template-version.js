var fs = require("fs");
const pkgJson = require('../package.json');
const template = 'index.html';

fs.readFile(process.cwd() + '/packages/core/src/' + template, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\<span id="any-ui-version">.*?\<\/span>\s?/g, "\<span id=\"any-ui-version\">" + pkgJson.version + "\<\/span> ");

  fs.writeFile(process.cwd() + '/packages/core/src/' + template, result, 'utf8', function (err) {
    if (err) return console.log(err);
  });
});
