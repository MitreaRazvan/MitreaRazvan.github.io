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




function hidePage(page) {
   var el = document.getElementById(page).style.display = 'none';
   el.style.display = 'none';
}

function showPage(page) {
    document.getElementById(page).style.display = 'block';
}
