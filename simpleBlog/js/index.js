function showSideNav(){
	var oSideNav = document.querySelector("#side-nav");
	var oShade = document.querySelector('#shade');
	oSideNav.style.right = 0;
	oShade.style.display = 'block';
	oShade.onclick = function(){
		oSideNav.style.right = "-200px";
		oShade.style.display = 'none';
	}
}