//Part 2 of the Assignment. This function will use a prompt box to receive a name argument and print response.

function myFunction() {
	var person = prompt("Please enter your name");
	if (person != null) {
		document.getElementById("name").innerHTML =
		"You entered the name, " + person  + " Thanks for participating!";
	}
}

// Part 3 of the Assignment.  This simple function will print to the console without an argument.

function newFunction() {
	console.log("This will print in the console");
}
newFunction()

// Part 3.  The 99 bottles of Beer loop.  First I will run it in the console.
x=99
while(x>=1)
	{console.log(x + " Bottles of beer on the wall " + x + " bottles of beer. Take one down, pass it around " + (x-1) + " bottles of beer on the wall")
x--;
}	
// Trying to get it to run on the webpage. Seems to be running the calc from 99 to 1, but only printing the last line.

function beerSong() {
	var x=99;
	while(x>=1)
		{document.getElementById("beer").innerHTML = x + "bottles of beer on the wall " + x + " bottles of beer, take one down, pass it around "  + (x-1) + "bottles of beer on the wall";
x--;}
}


beerSong()
