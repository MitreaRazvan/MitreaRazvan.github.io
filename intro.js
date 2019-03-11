console.info("my first js file");

var name="Mitrea";
var employed=true;

console.warn("employed");
console.warn(employed);


console.info("name:");
console.info(name);

console.info("name:");
console.info(name);


function getWellcomeMsg() {
    return "Welcome to my site!";
}


function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "black";
    }
    return "gold";
}

var wellcome = getWellcomeMsg();
console.info(wellcome);

var socialElement = document.getElementById("social");
console.info("socialElement", socialElement);
var color = getColor();
socialElement.style.color = color;

//first example
function hideHomePage() {
    document.getElementById('home-page').style.display = 'none';
}

function showSkillsPage() {
    document.getElementById('skills-page').style.display = 'block';
}
function clickOnSkills(){
    //hideHomePage();
    //showSkillsPage();
    hideAllpages()
    hidePage('home-page');
    hidePage('languages-page');
    hidePage('projects-page');
    showPage('skills-page');
}

function clickOnHome(){
    hideAllpages()
    hidePage('skills-page');
    hidePage('languages-page');
    hidePage('projects-page');
    showPage('home-page');
}
function clickOnProjects(){

    hideAllpages()
    hidePage('skills-page');
    hidePage('languages-page');
    hidePage('home-page');
    showPage('projects-page');
}
function clickOnLanguages(){
    hideAllpages()
    hidePage('skills-page');
    hidePage('home-page');
    hidePage('projects-page');
    showPage('languages-page');
}


function hidePage(page) {
    document.getElementById(page).style.display = 'none';
}

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function hideAllpages(){
var pages = document.getElementsByClassName('page');
for (var i = 0; i< pages.length; i++)
pages[i].style.display = 'none';
}