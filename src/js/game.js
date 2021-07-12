var config = {
  width: 1200,
  height: 675,
  scene: [bootGame, mainGame],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

var game = new Phaser.Game(config);
