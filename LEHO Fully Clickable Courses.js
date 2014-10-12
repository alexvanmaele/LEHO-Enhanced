// ==UserScript==
// @name       LEHO Fully Clickable Courses
// @namespace  LEHO.sucks.whats.new
// @description  Makes the courses' DIV fully clickable, instead of only their text.
// @match      http://leho.howest.be/index.php
// ==/UserScript==

$(".course").each(function()
{
	$(this).click(function()
	{
		var courseLink = $(this).find("a.visible").attr("href");
		window.open(courseLink, "_blank");
	});

	$(this).css({"cursor":"pointer"});
});