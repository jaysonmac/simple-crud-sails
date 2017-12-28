/**
 * Blog archive page scripts
 *
 */
 requirejs([
   'jquery'
   ,'admin'
   ,'sideBar'
   ,'datatables'
   ,'dataTableBootstrap'
   ,'loadSwal'
 ],
 function ($) {
   var articleDelete = (function (root, factory) {
     root.article = factory()
   }(this, function() {
     // AJAX to delete article
     var deleteFromDB = function(slug, cb) {
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
     var methods = {
       // Confirm dialog for delete
       'delete': function(slug) {
         var article = slug;
         var self = this;
         swal({
           title: "Confirmation",
           text: "Are your sure you want to delete this article?",
           type: "warning",
           showCancelButton: true,
           confirmButtonColor: "#F44336",
           confirmButtonText: "Delete",
           closeOnConfirm: false
         }, function () {
           deleteFromDB(article, function() {
             swal("Deleted!", "The article has been successfully deleted", "success");
           });
         });
       },
     }
     return methods;
   }));

   // Changes normal table to DataTable
   $(function createDataTables () {
       $('#articlesTable').DataTable({
           responsive: true
       });
   });
   // window.articleDelete = articleDelete;
}, function (err) {
  console.log(err);
});
