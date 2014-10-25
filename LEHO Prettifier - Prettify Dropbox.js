// ==UserScript==
// @name       LEHO Prettifier - Prettify Dropbox
// @namespace  LEHO.sucks.whats.new
// @description  Makes LEHO pretty. Prettifies the Dropbox area.
// @match      http://leho.howest.be/main/dropbox/dropbox.php?view=sendnew*
// ==/UserScript==

$(".bodyform div.formw").css({"float":"none"});

$(".row:nth(3)").hide(); // hide index.csv info
$(".row:last").hide(); // hide asterix info

$(".bodyform div.label").css({"width":"7em", "margin-right":"0", "text-align":"left"});

$("input[type=file]").css({"width":"26em"});

$("fieldset").css({"margin-bottom":"0"});

$("#dropbox_out").css({"margin-left":"1em", "padding-bottom":"0"});

$(".row:nth(1) .label").css({"margin-bottom":"1em"});

$(".row:nth(1) br").show();

$(".row textarea").css({"width":"auto", "min-width":"26em"});

$("#receivers_to").css({"margin-left":"0"});

$(".receivers").css({"margin-top":"1em"});

$(".bodyform input[type=button]").css({"padding":"0.1em", "display":"block", "margin-bottom":"0.3em", "position":"relative", "bottom":"13.5em"});
$(".bodyform input[type=button]:nth(0)").css({"float":"right", "right":"5em"});
$(".bodyform input[type=button]:nth(1)").css({"float":"left", "left":"0.5em"});

$(".bodyform tr:nth(1) td:nth(0)").css({"float":"left"});
$(".bodyform tr:nth(1) td:nth(2)").css({"float":"left", "position":"relative", "right":"4.5em"});

$(".bodyform tr:first th:last").css({"padding-left":"6.5em"});

$(".bodyform tr:nth(1) select").css({"min-width":"16.7em"});

$("#dropbox_actions").css({"margin-top":"-0.7em", "margin-bottom":"0.7em"});