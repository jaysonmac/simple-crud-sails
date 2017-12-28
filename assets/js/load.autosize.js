/**
 * Since autosize does not load itself globally via requirejs
 * this script will load it instead so make sure to set this
 * dependencies in `admin` module.
 *
 * Jayson Macatangay
 */
define(['autoSize'], function (autosize) {
  window.autosize = autosize;
});
