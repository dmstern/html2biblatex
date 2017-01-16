html2biblatex
=============

Citing a webpage in LaTeX has never been easier! – html2biblatex is a lightweight browser "plugin" for exporting web pages to BibLaTeX.

_small - flexible - magic!_

Just click on the html2biblatex bookmark button and paste the collected content into your BibLaTeX code. 

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

The JavaScript without whitespaces in string ("\n", "\t") for better platform and encoding support.

url-text.js
-----------

The same content as 'html2bibtex-min-win.js' except a prefixed 'javascript:' for use in a browser bookmark.

Installation
==========

 1. Create a new bookmark in the bookmark panel of your browser.
 2. Name it ("Export -> BibLaTeX" or whatever).
 3. URL: [Paste here the content from the file url-text.js]
 
Usage
==========

 4. Load the page you want to cite.
 5. Click on the new bookmark button.
 6. Copy the selected text to clipboard and press [ENTER].
 7. Paste the BibLaTeX entry into 
  * your .bib file.
  * JabRef: Just paste it into the open bibliography table.
  * Zotero: Go to 'file' -> 'import from clipboard'.


Tested with Google Chrome and Epiphany (GNOME) under Ubuntu 13.10.


=====================================================================

Formatting BibLaTex Entry
=========================

For a more beautiful formatting of the BibLaTeX entry you can replace the part after "javascript:" of the file 'url-text.js' with the content from the file 'html2bibtex-min.js'.



