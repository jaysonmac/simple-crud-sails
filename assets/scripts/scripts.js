// Sidebar menu active item changer
$(document).ready(function() {
    var sidebarItem = $('#leftsidebar .menu .list .item');
    var path = window.location.pathname;
	if (path=="/blog") { // Home
		sidebarItem.removeClass("active");
		sidebarItem.eq(0).addClass("active");
	}
	else if (path=="/blog/create") { // Create
		sidebarItem.removeClass("active");
		sidebarItem.eq(2).addClass("active");
	}
	else if (path.substring(0,10)=="/blog/edit") { // Edit
		sidebarItem.removeClass("active");
		sidebarItem.eq(3).addClass("active");
	}
	else if (path.substring(0,6)=="/blog/list" || "/blog/view") { // View
		sidebarItem.removeClass("active");
		sidebarItem.eq(1).addClass("active");
	}
});
// AJAX to delete article
function deleteArticle(slug, cb) {
	var id = '#'+slug;
	$.ajax({
	    url: "../blog/delete/"+slug,
	    type: "POST",
	    data: { 'slug' : slug },
	    success: function(data) {
	        $(id).closest('tr').fadeOut(400,function(){
	            $(id).closest('tr').remove();
	        });
          return cb();
	    },
	});
}
// Changes normal table to DataTable
$(function createDataTables () {
    $('#articlesTable').DataTable({
        responsive: true
    });
});
// For textareas
autosize($('textarea.auto-growth'));
// Confirm dialog for delete
function showConfirmMessage(slug) {
    var article = slug;
    swal({
        title: "Confirmation",
        text: "Are your sure you want to delete this article?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#F44336",
        confirmButtonText: "Delete",
        closeOnConfirm: false
    }, function () {
        deleteArticle(article, function() {
          swal("Deleted!", "The article has been successfully deleted", "success");
        });
    });
}
