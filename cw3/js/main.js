// Toggles the navigation bar from the right side of the screen.
function toggleNav(option) {
	var sideBar = document.getElementById("sideBar"); //Gets the sidebar's div tag.
	var openButton = document.getElementById("openButton"); //Gets the sidebar opening button.
	if (option === "on") {
		sideBar.style.width = "250px"; //Opens the sidebar.
		openButton.style.display = "none"; //Hides the sidebar opening button.
	} else {
		openButton.style.display = "block"; //Shows the sidebar opening button.
		sideBar.style.width = "0"; //Closes the sidebar,
	}
}

//The epic rick roll on the UGM.
function playrr() {
	var videoDiv = document.getElementById("notarickroll"); //Gets the video's div tag.
	var video = document.getElementById("rr"); //Gets the video tag.
	videoDiv.style.display = "block"; //Shows the video's div tag.
	video.play(); //Plays the video
}
