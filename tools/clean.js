const path = require('path');
const shell = require('shelljs');
console.log(">>> Cleanning");

['dist','package-lock.json','node_modules'].forEach(_path => {
    const fullPath = path.join(__dirname,'../',_path)
    console.log(">",fullPath);
    shell.rm('-rf',fullPath);
});

console.log(">>> Cleanup complete")