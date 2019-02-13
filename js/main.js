$(document).ready(function() {
	$('.img-responsive').on('click', function(){
		$("#showImg").empty();
		var image = $(this).attr("src");
		$("#showImg").append("<img class='img-responsive' src='" + image + "' />");
	})
});