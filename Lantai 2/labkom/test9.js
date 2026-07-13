const fs = require('fs');

const file = 'c:/skripsi/vrlabfkip_61aa348e/Lantai 2/labkom/script.js';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/"popupMaxHeight"\s*:\s*"95%"/g, '"popupMaxWidth": "100%",\n            "popupMaxHeight": "100%"');

fs.writeFileSync(file, txt);
console.log('Replaced 95% with 100%');
