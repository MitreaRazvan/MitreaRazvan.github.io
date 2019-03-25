//var employer = true;
//console.warn(employer);
//console.warn('employer');
//var name = "mitrea";
//console.info(name);
//console.info('name'); 

//function getWellcome() {
  //  return "wellcome here";
//}
//var wellcome = getWellcome();
//console.info(wellcome);

//var contentElement = document.getElementById("content");
//console.info("contentElement", contentElement);
//contentElement.style.color = "red";

function getWellcomeMsg() {
    return "Welcome to my site!";
}

var wellcome = getWellcomeMsg();
console.info(wellcome);

function getColor() {
    var date = new Date();
    console.log(date.getMinutes());
    if (date.getMinutes() > 18) {
        return "black";
    }
    return "Red";
}

var socialElement = document.getElementById("social");
console.info("socialElement", socialElement);
var color = getColor();
socialElement.style.color = color;




function hidePage(page) {
   var el = document.getElementById(page).style.display = 'none';
   el.style.display = 'none';
}

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}

function initMenu() {
    var links = document.querySelectorAll("#top-menu-bar a");
    console.info(links)
    for(var i = 0; i < links.length; i++) {
        links[i].onclick = clickOnMenuItem; 
    }
}

function clickOnMenuItem () {
    console.warn('clicked on menu', this);
    hideAllPages();
    var pageId = this.getAttribute('data-page');
    console.warn({pageId});
    showPage(pageId);
}

function hideAllPages(){
    var pages = document.querySelectorAll('.page');
    for(var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
}

initMenu();

function showSkills() {
    //var allEndorsements = [8, 12, 19, 3];
    //var skills = ['html','css','js','nodejs'];
    var skills = [
        {name: 'html', endorsements: 8},
        {name: 'css', endorsements: 12},
        {name: 'js', endorsements: 20},
        {name: 'nodejs', endorsements: 3}
    ];
    
    var htmlSkills = skills.map(function(skill, index) {
        console.warn('cine esti?', skill);
        var endorsements = ' <span class="endorsement">(' + skill.endorsements + ")</span>";
        return '<li>' + skill.name.toUpperCase() + endorsements  + '</li>';
    });

    var ul = document.querySelector('#skills-page ul');
    ul.innerHTML = htmlSkills.join('');
}

hideAllPages();
showPage('skills-page');

showSkills();
