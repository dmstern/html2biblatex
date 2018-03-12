const fs = require("fs");

fs.readFile("build/html2biblatex.min.js", (err, data) => {
  if (err) throw err;
  const output = `javascript:${data}`;
  fs.writeFile("dist/bookmark-url.js", output, "utf8", err => {
    if (err) throw err;
  });
});
