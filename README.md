html2biblatex
=============

Javascript-"plugin" for exporting web pages to BibLaTeX.

--------------------------------------------------------

File Description
================

html2bibtex.js
--------------

The JavaScript, that I wrote.

html2bibtex-min.js
------------------

The JavaScript without whitescpaces.

html2bibtex-min-win.js
----------------------

The JavaScript without whitespaces in string for better platform and encoding support.

url-text.js
-----------

The same content as 'html2bibtex-min-win.js' eccept a prefixed 'javascript:' for use in a browser bookmark.

How To Use
==========

 1. Create a new bookmark in the bookmark panel of your browser.
 2. Name it ("Export -> BibLaTeX" or whatever).
 3. URL: [Paste here the content from the file url-text.js]
 4. Load the page you want to cite.
 5. Click on the new bookmark button.
 6. Copy the selected text to clipboard and press [ENTER].
 7. Paste the BibLaTeX entry into 
  1. your .bib file.
  2. JabRef: Just paste it into the open bibliography table.
  3. Zotero: Go to 'file' -> 'import from clipboard'.


Tested with Google Chrome and Epiphany (GNOME) under Ubuntu 13.10.


=====================================================================

Formatting BibLaTex Entry
=========================

For a more beatiful formatting of the BibLaTeX entry you can replace the part after "javascript:" of the file 'url-text.js' with the content from the file 'html2bibtex-min.js'.



