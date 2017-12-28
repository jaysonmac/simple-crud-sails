/**
 * Global require.js config
 *
 */

var require = {
  baseUrl: 'http://localhost:1337/js',
  paths: {
    socketio: '../dependencies/sails.io'
    ,jquery: '../plugins/jquery/jquery.min' // named
    ,bootstrap: '../plugins/bootstrap/js/bootstrap.min'
    ,select: '../plugins/bootstrap-select/js/bootstrap-select.min'
    ,slimScroll: '../plugins/jquery-slimscroll/jquery.slimscroll'
    ,waves: '../plugins/node-waves/waves.min'
    ,loadWaves: '../js/load.waves'
    ,datatables: '../plugins/jquery-datatable/jquery.dataTables' // named
    ,dataTableBootstrap: '../plugins/jquery-datatable/skin/bootstrap/js/dataTables.bootstrap.min'
    ,autoSize: '../plugins/autosize/autosize.min'
    ,loadAutoSize: '../js/load.autosize'
    ,notify: '../plugins/bootstrap-notify/bootstrap-notify.min'
    ,validation: '../plugins/jquery-validation/jquery.validate'
    ,inputmask: '../plugins/jquery-inputmask/jquery.inputmask.bundle'
    ,swal: '../plugins/sweetalert/sweetalert.min'
    ,loadSwal: '../js/load.swal'
    ,admin: 'admin'
    ,sideBar: 'blog/blog.sidebar'
    ,blogDelete: 'blog/blog.delete'
  }
  ,shim: {
    socketio: { exports: 'io' }
    ,bootstrap: ['jquery']
    ,admin: ['jquery','bootstrap','loadWaves','slimScroll']
    ,slimScroll: ['jquery']
    ,inputmask: ['jquery']
  }
};
