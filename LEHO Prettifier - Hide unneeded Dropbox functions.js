// ==UserScript==
// @name       LEHO Prettifier - Hide unneeded Dropbox functions
// @namespace  LEHO.sucks.whats.new
// @description  Makes LEHO pretty. Only shows Dropbox functions on Dropbox home.
// @match      http://leho.howest.be/main/dropbox/*.php?view=*
// @match      http://leho.howest.be/main/dropbox/*.php?action=*
// ==/UserScript==

$("#dropbox_actions").remove();