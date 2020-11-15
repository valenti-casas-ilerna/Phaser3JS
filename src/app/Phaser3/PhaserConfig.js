import Bootloader from './Bootloader';
import MainScene from './Scenes/MainScene';


var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 300 },
          debug: false
      }
  },
  scene: [ Bootloader, MainScene ]
};

var game = new Phaser.Game(config);
