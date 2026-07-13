const fs=require('fs'); 
const txt=fs.readFileSync('c:/skripsi/vrlabfkip_61aa348e/Lantai 2/labkom/script.js','utf8'); 
const m=txt.match(/"id"\s*:\s*"popup_0BE2FE5E[\s\S]{0,1000}/); 
if(m) console.log(m[0]); 
else console.log('not found');
