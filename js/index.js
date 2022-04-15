$(document).ready(() => {
    setupEmailAddress()
})

function setupEmailAddress() {
    const name = "hello"
    const domain = "ghking.co"
    $("#email").attr("href", "mail" + "to" + ":" + name + "@" + domain)
}
