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
	links[2] = "part1.html#XML";
	links[3] = "part1.html#Ad_Disad_XHTML";
	links[4] = "part1.html#HTML5";
	links[5] = "part1.html#Which_Version";
	links[6] = "part1.html#Basic_Document_Structure";
	links[7] = "part1.html#DTD";
	links[8] = "part1.html#Header";
	links[9] = "part1.html#Body";
	links[10] = "part1.html#Block_Tags";
	links[11] = "part1.html#Inline_Tags";
	links[12] = "part2.html#Intro";
	links[13] = "part2.html#Syntax";
	links[14] = "part2.html#CSS_Properties";
	links[15] = "part2.html#Box_Model";
	links[16] = "part2.html#Positioning";
	links[17] = "part3.html#HTTP_Protocol";
	links[18] = "part3.html#Methods";
	links[19] = "part3.html#Caching";
	links[20] = "part3.html#Request_Structure";
	links[21] = "part3.html#Response_Structure";
	
	
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