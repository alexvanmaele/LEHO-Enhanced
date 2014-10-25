// ==UserScript==
// @name       LEHO Prettifier - Hide unneeded Dropbox functions
// @namespace  LEHO.sucks.whats.new
// @description  Makes LEHO pretty. Only shows Dropbox functions on Dropbox home.
// @match      *://*.leho.howest.be/main/dropbox/*.php?view=*
// @match      *://*.leho.howest.be/main/dropbox/*.php?action=*
// ==/UserScript==

$("#dropbox_actions").remove();