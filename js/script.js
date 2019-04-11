
function _parallax(){
	let s = document.getElementById("konten");
	s.style.opacity = 1;
	s.style.transition = '.9s';
	s.style.transform = "translate(0,0)";	
}

  window.onload = function(){
  	_parallax();
  }

function gelapIt(){
	document.body.classList.toggle('gelap');
	document.documentElement.style.transition = 'all .20s ease-in-out';
}