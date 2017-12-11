/**
 * grunt/pipeline.js
 *
 * The order in which your CSS, JavaScript, and client-side template files
 * injected as <script> or <link> tags.
 *
 * > If you are not relying on automatic asset linking, then you can safely ignore this file.
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/tasks/pipeline.js
 *
 */



//  ██████╗ ██╗      █████╗ ██╗███╗   ██╗          ██████╗███████╗███████╗
//  ██╔══██╗██║     ██╔══██╗██║████╗  ██║         ██╔════╝██╔════╝██╔════╝
//  ██████╔╝██║     ███████║██║██╔██╗ ██║         ██║     ███████╗███████╗
//  ██╔═══╝ ██║     ██╔══██║██║██║╚██╗██║         ██║     ╚════██║╚════██║
//  ██║     ███████╗██║  ██║██║██║ ╚████║      ██╗╚██████╗███████║███████║
//  ╚═╝     ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝      ╚═╝ ╚═════╝╚══════╝╚══════╝
//
//  ███████╗██╗██╗     ███████╗███████╗
//  ██╔════╝██║██║     ██╔════╝██╔════╝
//  █████╗  ██║██║     █████╗  ███████╗
//  ██╔══╝  ██║██║     ██╔══╝  ╚════██║
//  ██║     ██║███████╗███████╗███████║
//  ╚═╝     ╚═╝╚══════╝╚══════╝╚══════╝
//
// CSS files to inject as <link> tags, in order.
//
// > Note: if you're using built-in LESS support with default settings,
// > you'll want to change `assets/styles/importer.less` instead.
//
var cssFilesToInject = [

  // Bring in `.css` files for themes and style guides (e.g. Bootstrap, Foundation)
  'bootstrap/dist/css/*.min.css',
  'font-awesome/css/font-awesome.min.css',
  'admin-lte/dist/css/skins/_all-skins.min.css',
  'admin-lte/dist/css/*.min.css',
  'select2/dist/css/select2.min.css',
  'admin-lte/plugins/pace/pace.min.css',
  'datatables.net-bs/js/dataTables.bootstrap.min.css'

  // All of the rest of your custom `.css` files will be injected here,
  // in no particular order.  To customize the ordering, add additional
  // items here, _above_ this one.

];


//   ██████╗██╗     ██╗███████╗███╗   ██╗████████╗   ███████╗██╗██████╗ ███████╗
//  ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝   ██╔════╝██║██╔══██╗██╔════╝
//  ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║█████╗███████╗██║██║  ██║█████╗
//  ██║     ██      ██║██╔══╝  ██║╚██╗██║   ██║╚════╝╚════██║██║██║  ██║██╔══╝
//  ╚██████╗███████╗██║███████╗██║ ╚████║   ██║      ███████║██║██████╔╝███████╗
//   ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝      ╚══════╝╚═╝╚═════╝ ╚══════╝
//
//             ██╗███████╗    ███████╗██╗██╗     ███████╗███████╗
//             ██║██╔════╝    ██╔════╝██║██║     ██╔════╝██╔════╝
//             ██║███████╗    █████╗  ██║██║     █████╗  ███████╗
//        ██   ██║╚════██║    ██╔══╝  ██║██║     ██╔══╝  ╚════██║
//     ██╗╚█████╔╝███████║    ██║     ██║███████╗███████╗███████║
//     ╚═╝ ╚════╝ ╚══════╝    ╚═      ╚═╝╚══════╝╚══════╝╚══════╝
//
// Client-side javascript files to inject as <script> tags, in order.
//
var jsFilesToInject = [

  // Load `sails.io` before everything else.
  'dependencies/sails.io.js',

  // Bring in `.js` files for any other client-side JavaScript dependencies.
  // (e.g. Lodash, Vue.js, jQuery, Bootstrap, Ember, Angular, etc.)
  // > Be sure to list dependencies that depend on each other in the right order!
  'jquery/dist/jquery.min.js',
  'jquery-ui/jquery-ui.min.js',
  'bootstrap/dist/js/**/*.min.js',

  // All of the rest of your custom client-side js files will be injected here,
  // in no particular order.  To customize the ordering, add additional items
  // here, _above_ this one.

  'admin-lte/plugins/input-mask/jquery.inputmask.js',
  'admin-lte/dist/js/*.min.js',
  'select2/dist/js/select2.full.min.js',
  'admin-lte/plugins/pace/pace.min.js',
  'jquery-validation/dist/jquery.validate.min.js',
  'datatables.net/js/jquery.dataTables.min.js',
  'datatables.net-bs/js/dataTables.bootstrap.min.js',
  'js/*.js'
];


//   ██████╗██╗     ██╗███████╗███╗   ██╗████████╗   ███████╗██╗██████╗ ███████╗
//  ██╔════╝██║     ██║██╔════╝████╗  ██║╚══██╔══╝   ██╔════╝██║██╔══██╗██╔════╝
//  ██║     ██║     ██║█████╗  ██╔██╗ ██║   ██║█████╗███████╗██║██║  ██║█████╗
//  ██║     ██║     ██║██╔══╝  ██║╚██╗██║   ██║╚════╝╚════██║██║██║  ██║██╔══╝
//  ╚██████╗███████╗██║███████╗██║ ╚████║   ██║      ███████║██║██████╔╝███████╗
//   ╚═════╝╚══════╝╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝      ╚══════╝╚═╝╚═════╝ ╚══════╝
//
//  ████████╗███████╗███╗   ███╗██████╗ ██╗      █████╗ ████████╗███████╗███████╗
//  ╚══██╔══╝██╔════╝████╗ ████║██╔══██╗██║     ██╔══██╗╚══██╔══╝██╔════╝██╔════╝
//     ██║   █████╗  ██╔████╔██║██████╔╝██║     ███████║   ██║   █████╗  ███████╗
//     ██║   ██╔══╝  ██║╚██╔╝██║██╔═══╝ ██║     ██╔══██║   ██║   ██╔══╝  ╚════██║
//     ██║   ███████╗██║ ╚═╝ ██║██║     ███████╗██║  ██║   ██║   ███████╗███████║
//     ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
//
// Client-side HTML templates to precompile and inject as a single <script> tag.
// (The ordering of this array shouldn't matter.)
//
// > By default, Sails uses JST (~=lodash/underscore) templates and precompiles
// > them into functions for you.  If you want to use handlebars, pug, dust, etc.,
// > with the asset linker, no problem-- you'll just want to make sure the precompiled
// > templates get spit out to the same file.  For information on customizing and
// > installing your own Grunt tasks or using a different build pipeline, be sure
// > to check out:
// >   https://sailsjs.com/docs/concepts/assets/task-automation
//
var templateFilesToInject = [
  'templates/**/*.html'
];



//  ███╗   ███╗██╗███████╗ ██████╗      ███████╗███████╗████████╗██╗   ██╗██████╗
//  ████╗ ████║██║██╔════╝██╔════╝      ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗
//  ██╔████╔██║██║███████╗██║           ███████╗█████╗     ██║   ██║   ██║██████╔╝
//  ██║╚██╔╝██║██║╚════██║██║           ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝
//  ██║ ╚═╝ ██║██║███████║╚██████╗██╗   ███████║███████╗   ██║   ╚██████╔╝██║
//  ╚═╝     ╚═╝╚═╝╚══════╝ ╚═════╝╚═╝   ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝
//
// The following code exists to parse the arrays of glob expressions above, and
// then expose them via `module.exports`.  **You should not need to change any of
// the code below, unless you are modifying the default asset pipeline.**

// Default path for public folder (see documentation on sailsjs.com for more information)
var tmpPath = '.tmp/public/';

// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(cssPath) {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (cssPath[0] === '!') {
    return require('path').join('!' + tmpPath, cssPath.substr(1));
  }
  return require('path').join(tmpPath, cssPath);
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(jsPath) {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (jsPath[0] === '!') {
    return require('path').join('!' + tmpPath, jsPath.substr(1));
  }
  return require('path').join(tmpPath, jsPath);
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(tplPath) {
  // If we're ignoring the file, make sure the ! is at the beginning of the path
  if (tplPath[0] === '!') {
    return require('path').join('!assets/', tplPath.substr(1));
  }
  return require('path').join('assets/', tplPath);
});
