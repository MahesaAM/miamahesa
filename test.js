const fs = require('fs');
const html = fs.readFileSync('admin.html', 'utf8');
const scriptContent = html.split('<script>')[1].split('</script>')[0];
console.log("Script length:", scriptContent.length);
try {
  new Function(scriptContent);
  console.log("Syntax is OK");
} catch(e) {
  console.log("Syntax Error:", e.message);
}
