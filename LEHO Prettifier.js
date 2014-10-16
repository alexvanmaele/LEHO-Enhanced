// ==UserScript==
// @name       LEHO Prettifier
// @namespace  LEHO.sucks.whats.new
// @description  Makes LEHO pretty.
// @match      http://leho.howest.be/*
// ==/UserScript==


$("#platformannouncements").hide();

$(".actions").css({"margin":"0"});

$("#content br").first().hide();

$("#footer-wrap").hide();

$("body").css({"margin":"0"});

$(".user_course_category_header").css({"padding":"0.25em", "background":"rgb(189, 189, 189)"});

$(".title").css({"font-size":"0.9em", "text-transform":"none"});

$("#leftmenu").css({"margin-right":"0.3em", "float":"none"});

$("#corps").css({"padding":"1em 0 0 1em"});

$("#usermenu").css({"height":"auto"});

$("#menu").css({"width":"auto", "padding":"0 1em", "font-size":"0.94em"});

$("#usermenu").css({"width":"auto"});

$("#breadcrumbs").css({"width":"auto", "padding-right":"1em"});

$("#breadcrumbs span").css({"padding":"0.3em 1.8em"});

$("#corps").css({"width":"auto", "padding-right":"1em"});

$("#header #breadcrumbs span").css({"width":"auto", "padding-right":"1em"});

$(".ui-icon-triangle-1-s").css({"margin-bottom":"1em"});

$("*").css({"font-family":"Tahoma"});

$("#leftmenu ul li a").css({"padding-right":"2.5em"});

$("#corps #leftmenu").css({"width":"auto"});

$("#container #header #menu ul li a").css({"padding":"6px 12px"});

$("#container #header #menu").css({"height":"30px"});

$("#header #usermenu ul").css({"float":"none", "margin-top":"0"})

$("#usermenu").css({"position":"absolute", "top":"0.3em", "right":"-0.2em"});

$("#menu ul li a:nth(0)").html("LEHO");
$("#menu ul li a:nth(1)").html("Cursussen");
$("#menu ul li a:nth(2)").html("Agenda");

$("#usermenu ul li a:nth(0)").hide();
$("#usermenu ul li a:nth(1)").html("Log uit");

$("#corps #content .user_course_category .icon").css({"margin-bottom":"0.5em", "margin-left":"1.2em", "width":"44px"});

$("#menu").css({"padding-left":"1em"});

$(".course a").prop("target","_blank");

$("#header #usermenu a").css({"padding-top":"5px", "border-radius":"0"});

$("#header #usermenu ul li").css({"margin-left":"0.2em"});

$("#leftmenu ul").css({"margin-bottom":"0"});

$("#leftmenu ul li").css({"float":"left", "width":"19em", "text-align":"center"});

$("#content").css({"clear":"left", "padding-top":"0.3em"});

//$("#usermenu ul li a").css({"padding":"0.75em"});

$("#usermenu ul li a:nth(1)").css({"padding":"9px", "vertical-align":"middle"});

//
//	User Portal
//

$(".columns").css({"margin-left":"0", "margin-right":"1em"})
