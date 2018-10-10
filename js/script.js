

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {fixNav()};

// Get the header
var header = document.getElementById("flex-sec");
var fixedmenu = document.getElementById("fixed-menu");
var pagearea = document.getElementById("pagearea");
var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
window.addEventListener("resize", calwidth);

//calculate with on window resize
function calwidth(){
	width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function fixNav() {
	if(width>900){
		if (window.pageYOffset > sticky) {
		    fixedmenu.classList.add("fix-nav");
		    pagearea.classList.add("pad300");
		} else {
		   	fixedmenu.classList.remove("fix-nav");
		    pagearea.classList.remove("pad300");
		}
	}
}

// mobile menu function
var mobileMenuStatus = 0;
function mobilemenu(){
	var e = document.getElementById("fixed-menu");
	var btn = document.getElementById("mobilemenubtn");

	if(mobileMenuStatus == 0){
		
		e.classList.add("showmMenu");
		btn.classList.add("showmMenuBtn");
		mobileMenuStatus = 1;
	}else{
		e.classList.remove("showmMenu");
		btn.classList.remove("showmMenuBtn");
		mobileMenuStatus = 0;
	}
}

//open submenu

var btns = document.getElementsByClassName("hassubmenu");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    event.preventDefault();
    if(this.getElementsByTagName('div')[0].className == "vsubmenu displaySubmenu"){
    	this.getElementsByTagName('div')[0].className = "vsubmenu";
    }
    else if(this.getElementsByTagName('div')[0].className == "vsubmenu"){
    	this.getElementsByTagName('div')[0].className += " displaySubmenu";
    }

    
  }, true);
}