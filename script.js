    function myFunction() {
	var numbertext = document.getElementById("number").innerHTML;
	var number = parseInt(numbertext);
	var newNumber = number + 1;
	document.getElementById("number").innerHTML = newNumber;
	
	// make statements regarding value
	if (newNumber==10)
		{
			document.getElementById("result").innerHTML = "Your number is Ten"
		}
	else if (newNumber<10)
	{
		document.getElementById("result").innerHTML = "Your number is less than Ten";
	}

	else if (newNumber>10)
		{
			document.getElementById("result").innerHTML = "Your number:" +  newNumber + ", is greater than Ten";
		}
	};