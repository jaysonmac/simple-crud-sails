/**
 * Create article page scripts
 *
 */
 requirejs([
   'jquery'
   ,'admin'
   ,'sideBar'
   ,'loadAutoSize'
 ], function ($) {
   // For textareas
   autosize($('textarea.auto-growth'));
 }, function (err) {
   console.log(err);
 });
