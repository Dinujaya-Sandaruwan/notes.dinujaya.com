const mobileMenuDisplayBlock = () => {
	document.getElementById("mobileMenu").style.display = "block";
	document.getElementById("cards").style.display = "none";
	document.getElementById("footer").style.display = "none";
};
const mobileMenuDisplayNone = () => {
	document.getElementById("mobileMenu").style.display = "none";
	document.getElementById("cards").style.display = "flex";
	document.getElementById("footer").style.display = "block";
};

function checkDeviceWidth() {
	if (window.matchMedia("(min-width: 700px)").matches) {
		document.getElementById("mobileMenu").style.display = "none";
	}
}

window.addEventListener("resize", checkDeviceWidth);
