// $(document).ready(function() {
// 	if (window.location.pathname=="/blog") { // Home
// 		$('#sidebar ul li').removeClass();
// 		$('#sidebar ul li').eq(0).addClass("active");
// 	}
// 	else if (window.location.pathname=="/blog/create") { // Create
// 		$('#sidebar ul li').removeClass();
// 		$('#sidebar ul li').eq(2).addClass("active");
// 	}
// 	else if (window.location.pathname.substring(0,10)=="/blog/edit") { // Edit
// 		$('#sidebar ul li').removeClass();
// 		$('#sidebar ul li').eq(3).addClass("active");
// 	}
// 	else if (window.location.pathname.substring(0,6)=="/blog/") { // View
// 		$('#sidebar ul li').removeClass();
// 		$('#sidebar ul li').eq(1).addClass("active");
// 	}
// });
// function showModal(slug) {
//     event.preventDefault();
//     $('#deleteLink').attr('onclick', "deleteArticle('"+slug+"')");
//     $("#deleteModal").modal("show");
// }
// function deleteArticle(slug) {
// 	var id = '#'+slug;
// 	$.ajax({
// 	    url: "../blog/delete/"+slug,
// 	    type: "POST",
// 	    data: { 'slug' : slug },
// 	    success: function(data) {
// 	        $(id).closest('tr').fadeOut(300,function(){
// 	            $(id).closest('tr').remove();
// 	        });
// 	    },
// 	});
// }
