function $(selector) {
    return document.querySelector(selector);
};

function assingHeight (string) {
    $(string).style.height = window.innerHeight.toString() + "px";
}

var winWidht = window.innerWidth;

assingHeight(".what");

if (winWidht >= 1024) {
    assingHeight(".how");
    assingHeight(".why");
    assingHeight(".dev");    
    assingHeight(".more");
}

var genBtn = $("#genBtn");
var transBtn = $("#transBtn");
var almaBtn = $("#almaBtn");
var carouselContent = $(".carousel .content");
var contentMaxHeight = $(".carousel .gene").clientHeight + "px";
carouselContent.style.height = contentMaxHeight;

function removeLiClass(params) {
    var li = document.querySelectorAll(".carousel .nav li");
    
    for (i = 0; i < li.length; ++i) {
        li[i].className = ""
    }
}

genBtn.onclick = function () {
    $(".content").style["margin-left"] = "0px";
    removeLiClass();
    this.className = "active";
}

transBtn.onclick = function () {
    $(".content").style["margin-left"] = "-100%";
    removeLiClass();
    this.className = "active";
}

almaBtn.onclick = function () {
    $(".content").style["margin-left"] = "-200%";
    removeLiClass(); 
    this.className = "active";  
}





