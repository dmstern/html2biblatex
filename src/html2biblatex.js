(() => {
  function copyToClipboard(text) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  }

  const title = document.title;
  const url = document.URL;

  // get author if meta tag exists:
  const author_tag = document.querySelector("[name=author]");
  const author = author_tag == null ? "" : author_tag.content;

  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();

  // Add zero prefix:
  if (dd < 10) {
    dd = `0${dd}`;
  }

  // Add zero prefix:
  if (mm < 10) {
    mm = `0${mm}`;
  }

  // create string for date:
  const urldate = `${yyyy}-${mm}-${dd}`;

  // remove special characters for citation key:
  let title_key = title.replace(/[^0-9a-z]/gi, "");

  // create citation key:
  const citationKey = `${title_key}-${urldate}`;

  const type = "@Online";
  const filename = `:./references/${window.location.pathname.slice(1).replace(/\//g, '-')}.html:html`;

  // Replace german umalauts with latex commands:
  let title_tex = title
    .replace(/\u00e4/g, '\\"a')
    .replace(/\u00c4/g, '\\"A')
    .replace(/\u00f6/g, '\\"o')
    .replace(/\u00d6/g, '\\"O')
    .replace(/\u00fc/g, '\\"u')
    .replace(/\u00dc/g, '\\"U')
    .replace(/\u00DF/g, '\\"s');

  // generate BiBTeX entry:
  const bibTexEntry = `${type} {${citationKey},\r
    title = {${title_tex}},\r
    ${author ? `author = {${author}},\r` : ""}
    file = {${filename}},\r
    url = {${url}},\r
    urldate = {${urldate}}\r
  }`;

  copyToClipboard(bibTexEntry);
})();
