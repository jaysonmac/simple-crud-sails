// Sidebar menu active item changer
define(['jquery', 'domReady'],
    function($, domReady) {
        domReady(function() {
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
    }
);
