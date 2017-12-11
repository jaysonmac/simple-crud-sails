// Sidebar menu active item changer
var sidebarItem = $('.sidebar-menu .item');
$(document).ready(function() {
	if (window.location.pathname=="/blog") { // Home
		sidebarItem.removeClass("active");
		sidebarItem.eq(0).addClass("active");
	}
	else if (window.location.pathname=="/blog/create") { // Create
		sidebarItem.removeClass("active");
		sidebarItem.eq(2).addClass("active");
	}
	else if (window.location.pathname.substring(0,10)=="/blog/edit") { // Edit
		sidebarItem.removeClass("active");
		sidebarItem.eq(3).addClass("active");
	}
	else if (window.location.pathname.substring(0,6)=="/blog/list" || "/blog/view") { // View
		sidebarItem.removeClass("active");
		sidebarItem.eq(1).addClass("active");
	}
});
// Changes what article to delete by changing onclick attribute of delete button in modal
function showModal(slug) {
    event.preventDefault();
    $('#deleteLink').attr('onclick', "deleteArticle('"+slug+"')");
    $("#deleteModal").modal("show");
}
// AJAX to delete article
function deleteArticle(slug) {
	var id = '#'+slug;
	$.ajax({
	    url: "../blog/delete/"+slug,
	    type: "POST",
	    data: { 'slug' : slug },
	    success: function(data) {
	        $(id).closest('tr').fadeOut(300,function(){
	            $(id).closest('tr').remove();
	        });
	    },
	});
}
// Changes normal table to DataTable
$(function createDataTables () {
    $('#articlesTable').DataTable()
});
