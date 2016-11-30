$(document).ready(function() 
{
	$("#work-button").click(function() 
	{
		didClickNavigationButton($(this), "html/work.html")
	});

	$("#personal-projects-button").click(function() 
	{
		didClickNavigationButton($(this), "html/personal_projects.html")
	});

	$("#education-button").click(function() 
	{
		didClickNavigationButton($(this), "html/education.html")
	});

	$("#work-button").click()
});

function didClickNavigationButton(navigationButton, contentURL)
{
	$("nav > .selected").removeClass("selected")

	navigationButton.addClass("selected")

	$("#content").load(contentURL);
}