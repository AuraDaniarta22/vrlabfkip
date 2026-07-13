const fs = require('fs');

const file = 'c:/skripsi/vrlabfkip_61aa348e/Lantai 2/labkim/script.js';
let txt = fs.readFileSync(file, 'utf8');

txt = txt.replace(/popup_E60794C1_A5CB_AD8A_41B1_0061B7A38CB6_0_2\.png/g, 'popup_E0D10C23_A5F4_9C8F_41D2_2419D169479E_0_1.png');

fs.writeFileSync(file, txt);
console.log('Replaced successfully');
