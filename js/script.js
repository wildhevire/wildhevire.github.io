
function _parallax(){
	let s = document.getElementById("konten");
	s.style.opacity = 1;
	s.style.transition = '.9s';
	s.style.transform = "translate(0,0)";	
}

// Loading hasn't finished yet
  window.onload = function(){
  	_parallax();
  }
