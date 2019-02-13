$(document).ready(function() {
	var modal = document.getElementById('myModal');
	var imgs = document.getElementsByClassName("img-responsive");
	var span = document.getElementsByClassName("close")[0];

	var myFunction = function() {
		var src = this.getAttribute("src");
		$("#imgModal").html("<img class='img-responsive' src='" + src + "' />");
		console.log("test")
		modal.style.display = "block";
		span.onclick = function() {
			modal.style.display = "none";
		}
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	};

	for (var i = 0; i < imgs.length; i++) {
		imgs[i].addEventListener('click', myFunction, false);
	}
});