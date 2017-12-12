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
	        $(id).closest('tr').fadeOut(400,function(){
	            $(id).closest('tr').remove();
	        });
	    },
	});
}
// Changes normal table to DataTable
$(function createDataTables () {
    $('#articlesTable').DataTable({
        responsive: true
    });
});
