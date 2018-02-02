$(document).ready(function()
{
    setupEmailAddress();
});

function setupEmailAddress()
{
    var name = "hello";
    var domain = "ghking.co";

    $("#email").attr("href", "mail" + "to" + ":" + name + "@" + domain);
}
