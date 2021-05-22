function validate() {
	var fname = document.forms["contactForm"]["fname"].value; //Gets the fname value.
	var lname = document.forms["contactForm"]["lname"].value; //Gets the lname value.
	var email = document.forms["contactForm"]["email"].value; //Gets the email value.
	var phnum = document.forms["contactForm"]["phnum"].value; //Gets the phnum value.
	var rating = document.forms["contactForm"]["rating"].value; //Gets the rating value.
	var rickroll = document.forms["contactForm"]["rickroll"].value; //Gets the rickroll value.

	//checks if any of the input values are empty.
	if (fname == "" || lname == "" || email == "" || phnum == "") {
		alert("Looks like you left some empty fields. Please fill them.");
	} else {
		//Just some value checks.
		if (rickroll == "No") {
			alert("Try pressing on the 'UGM' to see the surprise.");
		} else if (parseInt(rating) < 3) {
			alert("Come on. Give me a better rating. I deserve a 3 at least.");
		} else if (phnum.length != 10) {
			alert("I know phone numbers contain 10 digits. Fill it properly!");
		}
		//Gonna sell the information now.
		else {
			alert(
				"Hello, " +
					fname +
					" " +
					lname +
					". Thanks for your contact info. I am selling it to the FBI now."
			);
		}
	}
}
