const mobileMenuDisplayBlock = () => {
	document.getElementById("mobileMenu").style.display = "block";
};
const mobileMenuDisplayNone = () => {
	document.getElementById("mobileMenu").style.display = "none";
};

function checkDeviceWidth() {
	if (window.matchMedia("(min-width: 700px)").matches) {
		document.getElementById("mobileMenu").style.display = "none";
	}
}

window.addEventListener("resize", checkDeviceWidth);
