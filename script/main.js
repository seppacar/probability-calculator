$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function clearinput()
{
  document.getElementById("form1").reset();
}


function probabilitycalc()//Implement and test on html-server
{
	var aprob = parseFloat(document.getElementById('a').value);
	var bprob = parseFloat(document.getElementById('b').value);
	var anotoccur = parseFloat(document.getElementById('anotoccur').value);	// P(A') / 1 - P(A)
	var bnotoccur = parseFloat(document.getElementById('bnotoccur').value); 	// P(B') / 1 - P(B)
	var bothoccur = parseFloat(document.getElementById('bothoccur').value); //P(A∩B) / P(A) × P(B)
	var aborboth = parseFloat(document.getElementById('aborboth').value); //P(A∪B) / P(A) + P(B) - P(A∩B)
	var aorbnotboth = parseFloat(document.getElementById('aorbnotboth').value); //P(AΔB) / 	P(A) + P(B) - 2P(A∩B)
	var aorbnotoccur = parseFloat(document.getElementById('aorbnotoccur').value); //P((A∪B)') / 1 - P(A∪B)
	
	var arr = [[aprob,"P(A)"], [bprob,"P(B)"], [anotoccur,"P(A')"], [bnotoccur,"P(B')"], [bothoccur,"P(A∩B)"], [aborboth,"P(A∪B)"], [aorbnotboth,"P(AΔB)"], [aorbnotoccur,"P((A∪B)')"]];
	var incorrect = 0;
	var alertstring = "Probability of an event must be between 0 and 1, check value of "
	for (var i = 0; i < arr.length; i++)
	{	
		if (arr[i][0] < 0 || arr[i][0] > 1)
		{	
			alertstring += arr[i][1] + ', ' ;
			incorrect += 1;
		}

	}

	if (incorrect > 0)
	{
		alertstring = alertstring.substring(0, alertstring.length - 2);
		alert(alertstring);
		return;
	}

	if (isNaN(aprob) && isNaN(bprob) && isNaN(anotoccur) && isNaN(bnotoccur) && isNaN(bothoccur) && isNaN(aborboth) && isNaN(aorbnotboth) && isNaN(aorbnotoccur))
	{
		alert("Enter probability values in order to calculate");
		return;
	}

	if (isNaN(aprob) == 0 || isNaN(anotoccur) == 0)
	{
		if (isNaN(anotoccur) == 0)
		{
			aprob = 1 - anotoccur;
		}
		if (isNaN(bprob) == 0)
		{

		}
		else if (isNaN(bnotoccur) == 0)
		{
			bprob = 1 - bnotoccur;
		}
		else if(isNaN(bothoccur) == 0)
		{
			bprob = bothoccur / aprob;
		}
		else if (isNaN(aborboth) == 0)
		{
			bprob = (aborboth - aprob) / (1 - aprob);
		}
		else if (isNaN(aorbnotboth) == 0)
		{
			bprob = (aorbnotboth - aprob) / (1- 2 * aprob);
		}
		else if (isNaN(aorbnotoccur) == 0)
		{
			bprob = ((1 - aorbnotoccur) - aprob) / (1 - aprob); 
		}
		
		anotoccur = 1 - aprob;	// P(A') / 1 - P(A)
		bnotoccur = 1 - bprob; 	// P(B') / 1 - P(B)
		bothoccur = aprob * bprob; //P(A∩B) / P(A) × P(B)
		aborboth = aprob + bprob - bothoccur; //P(A∪B) / P(A) + P(B) - P(A∩B)
		aorbnotboth = aprob + bprob - (2 * bothoccur); //P(AΔB) / 	P(A) + P(B) - 2P(A∩B)
		aorbnotoccur = 1 - aborboth; //P((A∪B)') / 1 - P(A∪B)
		var abutnotb = aprob * (1 - bprob); // P(A) × (1- P(B))
		var bbutnota = bprob * (1 - aprob); // P(B) × (1- P(A))
	}

	if (isNaN(bprob) == 0 || isNaN(bnotoccur) == 0)
	{
		if (isNaN(bnotoccur) == 0)
		{
			bprob = 1 - bnotoccur;
		}
		if (isNaN(aprob) == 0)
		{

		}
		else if (isNaN(anotoccur) == 0)
		{
			aprob = 1 - anotoccur;
		}
		else if(isNaN(bothoccur) == 0)
		{
			aprob = bothoccur / bprob;
		}
		else if (isNaN(aborboth) == 0)
		{
			aprob = (aborboth - bprob) / (1 - bprob);
		}
		else if (isNaN(aorbnotboth) == 0)
		{
			aprob = (aorbnotboth - bprob) / (1- 2 * bprob);
		}
		else if (isNaN(aorbnotoccur) == 0)
		{
			aprob = ((1 - aorbnotoccur) - bprob) / (1 - bprob); 
		}
		
		anotoccur = 1 - aprob;	// P(A') / 1 - P(A)
		bnotoccur = 1 - bprob; 	// P(B') / 1 - P(B)
		bothoccur = aprob * bprob; //P(A∩B) / P(A) × P(B)
		aborboth = aprob + bprob - bothoccur; //P(A∪B) / P(A) + P(B) - P(A∩B)
		aorbnotboth = aprob + bprob - (2 * bothoccur); //P(AΔB) / 	P(A) + P(B) - 2P(A∩B)
		aorbnotoccur = 1 - aborboth; //P((A∪B)') / 1 - P(A∪B)
		var abutnotb = aprob * (1 - bprob); // P(A) × (1- P(B))
		var bbutnota = bprob * (1 - aprob); // P(B) × (1- P(A))
	}

	if (isNaN(bothoccur) == 0)//Only able to calculate P(AΔB),P((A∪B)'),P(A∪B)
	{
		if (isNaN(aborboth) == 0)
		{
			aorbnotboth = aborboth - bothoccur;
			aorbnotoccur = 1 - aborboth;
		}
		else if (isNaN(aorbnotboth) == 0)
		{
			aborboth = aorbnotboth + bothoccur;
			aorbnotoccur = 1 - aborboth;
		}
		else if (isNaN(aorbnotoccur) == 0)
		{
			aborboth = 1 - aorbnotoccur;
			aorbnotboth = aborboth - bothoccur;
		}
	}
	if (isNaN(aborboth) == 0)
	{
		if (isNaN(aorbnotboth) == 0)
		{
			bothoccur = aborboth - aorbnotboth;
			aorbnotoccur = 1 - aborboth;
		}
	}
	if (isNaN(aorbnotboth) == 0)
	{
		if (isNaN(aorbnotoccur) == 0)
		{
			aborboth = 1 - aorbnotoccur;
			bothoccur = aborboth - aorbnotboth;
		}
	}

document.getElementById('a').value = Math.round(aprob * 100) / 100;
document.getElementById('b').value = Math.round(bprob * 100) / 100;
document.getElementById('anotoccur').value = Math.round(anotoccur * 100) / 100;
document.getElementById('bnotoccur').value = Math.round(bnotoccur * 100) / 100;
document.getElementById('bothoccur').value = Math.round(bothoccur * 100) / 100;
document.getElementById('aborboth').value = Math.round(aborboth * 100) / 100;
document.getElementById('aorbnotboth').value = Math.round(aorbnotboth * 100) / 100;
document.getElementById('aorbnotoccur').value = Math.round(aorbnotoccur * 100) / 100;
document.getElementById('abutnotb').value = Math.round(abutnotb * 100) / 100;
document.getElementById('bbutnota').value = Math.round(bbutnota * 100) / 100;
}