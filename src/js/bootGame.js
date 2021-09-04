class bootGame extends Phaser.Scene {
	constructor() {
		super("bootGame");
	}

	preload() {
		//images
		this.load.image("bg", "src/assets/bg.png");
		this.load.image("player", "src/assets/samurai.png");
		//sprites
		this.load.spritesheet("ghost", "src/assets/ghost-sprite.png", {
			//ghosts
			frameWidth: 75,
			frameHeight: 75,
		});
		this.load.spritesheet("candy", "src/assets/candy-sprite.png", {
			// candy
			frameWidth: 22,
			frameHeight: 22,
		});

		// audio
		// this.load.audio("roblox-death-audio", "src/assets/roblox-death.mp3"); // "src/assets/roblox-death.ogg",
	}

	create() {
		
		this.add.text(20, 20, "Loading Game...");
		// create animations
		this.anims.create({
			key: "candy_beam",
			frames: this.anims.generateFrameNumbers("candy", {
				start: 0,
				end: 1,
			}),
			frameRate: 5,
			repeat: -1,
		});
		// ghost walk animation
		this.anims.create({
			key: "ghost_walk",
			frames: this.anims.generateFrameNumbers("ghost", {
				start: 0,
				end: 1,
			}),
			frameRate: 5,
			repeat: -1,
		});

		// this.deathSound = this.sound.add("roblox-death-audio");

		this.scene.start("mainMenu");
	}
}
