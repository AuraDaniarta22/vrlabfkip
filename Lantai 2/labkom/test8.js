const fs=require('fs'); 
const txt=fs.readFileSync('c:/skripsi/vrlabfkip_61aa348e/Lantai 2/labkom/script.js','utf8'); 
const m=txt.match(/"popupMax[^"]*"\s*:\s*"[^"]*"/ig); 
if(m) console.log([...new Set(m)]); 
else console.log('not found');
