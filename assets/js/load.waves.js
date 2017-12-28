/**
 * Since Waves does not load itself globally via requirejs
 * this script will load it instead so make sure to set this
 * dependencies in `admin` module.
 *
 * Jeff Pillejera
 */
define(['waves'], function (Waves) {
  window.Waves = Waves;
});
