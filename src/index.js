/**
 * @author       Justine De Caires <justine@minerva.kgi.edu>
 * @license      {@link https://github.com/jdecked/react-phaser/blob/master/LICENSE|MIT License}
 */

require('./polyfills');

var CONST = require('./src/const');
var Extend = require('./utils/object/Extend');

var Phaser = {
  Actions: require('./actions'),
  Animation: require('./animations'),
  Cache: require('./cache'),
  Cameras: require('./cameras'),
  Class: require('./utils/Class'),
  Create: require('./create'),
  Curves: require('./curves'),
  Data: require('./data'),
  Display: require('./display'),
  DOM: require('./dom'),
  Events: require('./events'),
  Game: require('./boot/Game'),
  GameObjects: require('./gameobjects'),
  Geom: require('./geom'),
  Input: require('./input'),
  Loader: require('./loader'),
  Math: require('./math'),
  Physics: require('./physics'),
  Plugins: require('./plugins'),
  Renderer: require('./renderer'),
  Scene: require('./scene/Scene'),
  Scenes: require('./scene'),
  Sound: require('./sound'),
  Structs: require('./structs'),
  Textures: require('./textures'),
  Tilemaps: require('./tilemaps'),
  Time: require('./time'),
  Tweens: require('./tweens'),
  Utils: require('./utils')
};

// Merge in the consts

Phaser = Extend(false, Phaser, CONST);

module.exports = Phaser;
global.Phaser = Phaser;
