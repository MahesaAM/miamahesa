const fs = require('fs');
const html = fs.readFileSync('admin.html', 'utf8');

const t = html.indexOf(`onclick="deleteWish('`);
const matchStr = html.substring(t, t+100);

console.log("Found deleteWish:", matchStr)

