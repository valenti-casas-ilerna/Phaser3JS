class Bootloader extends Phaser.Scene {

  constructor() {
    super("Bootloader");
  }

  preload() {
    console.log('Bootloader Preload');
  }

  create() {
    this.add.text(20, 20, "Loading game...");

    setTimeout(() => {
      this.scene.start('MainScene')
    }, 2000);
  }

}
export default Bootloader;
