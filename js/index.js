$(document).ready(function()
{
    setupListeners();
    setupEmailAddress();

    $("#work-button").click();
});

// Setup

function setupEmailAddress()
{
    var name = "hello";
    var domain = "ghking.co";

    $("#email").attr("href", "mail" + "to" + ":" + name + "@" + domain);
}

function setupListeners()
{
    $("#work-button").click(function()
    {
        didClickNavigationButton($(this), "html/work.html");
    });

    $("#personal-projects-button").click(function()
    {
        didClickNavigationButton($(this), "html/personal_projects.html");
    });

    $("#education-button").click(function()
    {
        didClickNavigationButton($(this), "html/education.html");
    });
}

// Helpers

function didClickNavigationButton(navigationButton, contentURL)
{
	$("nav > .selected").removeClass("selected");

	navigationButton.addClass("selected");

	$("#content").load(contentURL);
}
