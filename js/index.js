const WORK_HASH = "#work";
const SIDE_PROJECTS_HASH = "#personalprojects";
const EDUCATION_HASH = "#education";

$(document).ready(function()
{
    setupListeners();
    setupEmailAddress();

    var hash = window.location.hash

    if (hash)
    {
        if (hash == SIDE_PROJECTS_HASH)
        {
            $("#personal-projects-button").click();
        }
        else if (hash == EDUCATION_HASH)
        {
            $("#education-button").click();
        }
        else
        {
            $("#work-button").click();
        }
    }
    else
    {
        $("#work-button").click();
    }
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

        window.location.hash = WORK_HASH;
    });

    $("#personal-projects-button").click(function()
    {
        didClickNavigationButton($(this), "html/personal_projects.html");

        window.location.hash = SIDE_PROJECTS_HASH;
    });

    $("#education-button").click(function()
    {
        didClickNavigationButton($(this), "html/education.html");

        window.location.hash = EDUCATION_HASH;
    });
}

// Helpers

function didClickNavigationButton(navigationButton, contentURL)
{
	$("nav > .selected").removeClass("selected");

	navigationButton.addClass("selected");

	$("#content").load(contentURL);
}
