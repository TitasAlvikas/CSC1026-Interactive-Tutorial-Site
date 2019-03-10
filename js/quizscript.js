if(document.addEventListener)
{	
	document.addEventListener("DOMContentLoaded", registerEvents);
}

function registerEvents()
{
	document.getElementById('Q1').focus();
	
	$("#quizform").submit(checkAnswers);
}

function checkAnswers(event)
{
	var score = 0;
	
	var notCompleted = new Array();
	
	var pattern = /<*img>*/gi;
	
	if(pattern.test(document.getElementById('Q1').value))
	{
		score++;
	}
	
	if(document.getElementById('Q1').value == "")
	{
		notCompleted.push("1");
	}
	
	var q2Check = 0;
	
	var q2 = document.getElementsByName('question2');
	
	for(i = 0; i < q2.length; i++)
	{
		if(q2[i].checked)
		{
			q2Check++;
		}
	}
	
	if(document.getElementById('A2').checked)
	{
		score++;
	}
	
	if(q2Check == 0)
	{
		notCompleted.push("2");
	}
	
	
	
	var q3Check = 0;
	
	var q3 = document.getElementsByName('question3');
	
	for(i = 0; i < q3.length; i++)
	{
		if(q3[i].checked)
		{
			q3Check++;
		}
	}
	
	if(document.getElementById('A3').checked && document.getElementById('C3').checked)
	{
		score++;
	}
	
	if(q3Check == 0)
	{
		notCompleted.push("3");
	}
	
	
	
	if(document.getElementsByName('question4')[0].value == "2")
	{
		score++;
	}
	
	
	
	var q5Check = 0;
	
	var q5 = document.getElementsByName('question5');
	
	for(i = 0; i < q5.length; i++)
	{
		if(q5[i].checked)
		{
			q5Check++;
		}
	}
	
	if(document.getElementById('B5').checked)
	{
		score++;
	}
	
	if(q5Check == 0)
	{
		notCompleted.push("5");
	}
	
	
	
	var q6Check = 0;
	
	var q6 = document.getElementsByName('question6');
	
	for(i = 0; i < q6.length; i++)
	{
		if(q6[i].checked)
		{
			q6Check++;
		}
	}
	
	if(document.getElementById('A6').checked)
	{
		score++;
	}
	
	if(q6Check == 0)
	{
		notCompleted.push("6");
	}
	
	
	
	var q7Check = 0;
	
	var q7 = document.getElementsByName('question7');
	
	for(i = 0; i < q7.length; i++)
	{
		if(q7[i].checked)
		{
			q7Check++;
		}
	}
	
	if(document.getElementById('B7').checked)
	{
		score++;
	}
	
	if(q7Check == 0)
	{
		notCompleted.push("7");
	}
	
	
	
	var q8Check = 0;
	
	var q8 = document.getElementsByName('question8');
	
	for(i = 0; i < q8.length; i++)
	{
		if(q8[i].checked)
		{
			q8Check++;
		}
	}
	
	if(document.getElementById('A8').checked)
	{
		score++;
	}
	
	if(q8Check == 0)
	{
		notCompleted.push("8");
	}
	
	
	
	var q9Check = 0;
	
	var q9 = document.getElementsByName('question9');
	
	for(i = 0; i < q9.length; i++)
	{
		if(q9[i].checked)
		{
			q9Check++;
		}
	}
	
	if(document.getElementById('B9').checked)
	{
		score++;
	}
	
	if(q9Check == 0)
	{
		notCompleted.push("9");
	}
	
	
	
	var q10Check = 0;
	
	var q10 = document.getElementsByName('question10');
	
	for(i = 0; i < q10.length; i++)
	{
		if(q10[i].checked)
		{
			q10Check++;
		}
	}
	
	if(document.getElementById('C10').checked)
	{
		score++;
	}
	
	if(q10Check == 0)
	{
		notCompleted.push("10");
	}
	
	
	
	if(document.getElementsByName('question11')[0].value == "3")
	{
		score++;
	}
	
	
	
	var pattern = /\s*query\s*/gi;
	
	if(pattern.test(document.getElementById('Q12').value))
	{
		score++;
	}
	
	if(document.getElementById('Q12').value == "")
	{
		notCompleted.push("12");
	}
	
	
	
	if(notCompleted.length > 0)
	{
		var save = window.confirm("Questions " + notCompleted.toString() + " are not filled in. Do you want to continue?");
		
		if(!save)
		{
			return;
		}
	}
	
	
	
	var para = document.createElement("p");
	if($("#result").length)
	{
		$("#result").remove();
	}
	
	para.id = "result";
	
	para.innerHTML = "<span style='display: block; border: 3px black solid; padding: 10px; color:#000000; font:30px arial, sans-serif;'>" + "Your score: " + score + " out of 12 marks" + "</span>";
	var page = document.getElementById("quizform");
	
	
	page.appendChild(para);
	event.preventDefault();
	window.scrollTo(0, document.body.scrollHeight);
}