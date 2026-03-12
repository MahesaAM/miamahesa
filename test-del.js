const fs = require('fs');
const html = fs.readFileSync('admin.html', 'utf8');

if (html.includes('deleteWish(')) {
    console.log("Delete func found in html");
}
