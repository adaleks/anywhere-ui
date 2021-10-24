const rebase = require('rebase');
const fs = require('fs-extra');
const path = require('path');


let subdir = 'anywhere-ui-showcase';
console.log(process.cwd() + '/' + subdir)

// fs.removeSync(process.cwd() + '/' + subdir);
// fs.copySync(process.cwd() + '/www', subdir);

let files = ['index.html'];
files.forEach((filename) => {
  let path_to_file = process.cwd() + '/www/' + filename;
  let file = fs.readFileSync(path_to_file, 'utf8');
  let replacements = {
    '^\/(?!\/)': '/' + subdir + '/',
    '^(?!\/|http|https)': '/' + subdir + '/',
  };
  let rebased = rebase(file, {
    url: replacements,
    a: replacements,
    img: replacements,
    link: replacements,
    script: replacements
  });
  fs.writeFileSync(path_to_file, rebased);
});
