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
            
            // Replace any variant of popup_E60794C1... with popup_E0D10C23...
            txt = txt.replace(/popup_E60794C1_A5CB_AD8A_41B1_0061B7A38CB6_0_[0-9]\.png/g, 'popup_E0D10C23_A5F4_9C8F_41D2_2419D169479E_0_1.png');
            
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
