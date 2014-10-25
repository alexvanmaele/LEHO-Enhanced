// ==UserScript==
// @name       LEHO Course Notification Hider
// @namespace  LEHO.sucks.whats.new
// @description  Adds button to clear all course notifications in LEHO.
// @match      *://*.leho.howest.be/index.php
// ==/UserScript==

function clearNotifications()
{
	var allCourseLinks = getAllCourseLinks();
	sendRequestToAll(allCourseLinks);
	hideNotificationIcons();
}

function getAllCourseLinks()
{
	var allCourseLinks = [];

	$(".course .notifications").has("img").each(function()
	{
		var courseLinks = [];

		$(this).find("a").each(function()
		{
			courseLinks.push($(this).attr("href"));
		});

		allCourseLinks = allCourseLinks.concat(courseLinks);
	});

	return allCourseLinks;
}

function sendRequestToAll(links)
{
	for(var i = 0; i < links.length; i++)
	{
		sendRequestTo(links[i]);
	}

	var suffix = links.length == 1 ? "" : "s";
	console.log("Sent " + links.length + " request" + suffix + ".");
}

function sendRequestTo(requestURL)
{
	$.ajax(
	{
	  type: "GET",
	  url: requestURL
	})
	.done(function()
	{
		console.log("Send request to: " + requestURL)
	});
}

function hideNotificationIcons()
{
	$(".course .notifications").has("img").each(function()
	{
		$(this).hide();
	});
}


//==========
//===MAIN===
//==========

var clearNotificationsButton = "<li><a id='btnClearNotifications' style='cursor:pointer; background-color:#35b250'>Notificaties verwijderen</a></li>";

$("#leftmenu ul").append(clearNotificationsButton)
	.click(function()
	{
		clearNotifications();
	});