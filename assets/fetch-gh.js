"use strict";
/* fetches a list of github repos */
var gh_user = "anidox";
window.onload = async function () {
    var gh_response = await axios.get("https://api.github.com/users/" + gh_user + "/starred");
    var gh_formattedhtml = gh_response.data.filter(function(e) { return e.owner.login.toLowerCase() == "anidox" }).map(function(e) {
        return '<div class="projects-project pos-hcenter"><h1>' + e.name + '</h1><p>' + e.description + '</p><a class="projects-link" href="' + e.html_url + '">View on GitHub</a></div>'
    });
    document.getElementsByClassName("projects-container")[0].innerHTML = gh_formattedhtml.join("");
}