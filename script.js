var slideIndex = 0;

if(document.addEventListener)
{	
	document.addEventListener("DOMContentLoaded", registerEvents);
}

function registerEvents()
{
	loadLinks();
}

function loadLinks()
{
	var links = new Array(22);
	links[0] = "part1.html#HTML_Versions";
	links[1] = "part1.html#XHTML";
	
	var a = Math.floor(Math.random() * 22); 
	var i = a;
	
	document.getElementById("randomTopic").href = links[i];
	
	carousel();
}

function carousel()
{
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++)
	{
		x[i].style.display = "none";
		x[i].style.width = "calc(100% - 5px)";
		x[i].style.height = "481px";
		x[i].style.border = "3px solid black";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}