const fs = require('fs');
const path = require('path');

const baseDir = 'c:/skripsi/vrlabfkip_61aa348e';
let modifiedFiles = [];

function walk(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            if (file !== '.git' && file !== '.vercel') {
                walk(filePath);
            }
        } else if (file.endsWith('.htm') || file.endsWith('.html') || file.endsWith('.js')) {
            let txt = fs.readFileSync(filePath, 'utf8');
            let original = txt;
            
            // Fix case sensitivity issues for URLs/paths
            txt = txt.replace(/labbio/g, 'labbio');
            txt = txt.replace(/labmath/g, 'labmath');
            txt = txt.replace(/labkim/g, 'labkim');
            txt = txt.replace(/labkom/g, 'labkom');
            
            if (txt !== original) {
                fs.writeFileSync(filePath, txt, 'utf8');
                modifiedFiles.push(filePath);
            }
        }
    });
}

walk(baseDir);
console.log('Modified files:', modifiedFiles.length);
modifiedFiles.forEach(f => console.log(f));
