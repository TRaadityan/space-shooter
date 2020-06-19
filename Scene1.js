


class Scene1 extends Phaser.Scene{
    constructor(){
        super("bootgame");
    }
    preload(){
        this.load.image('begin','assets/start.png');
        
    }
 
    create(){

        this.begin=this.add.image(this.game.config.width / 2 , this.game.config.height / 2, "begin");
        this.begin.setScale(2);
        
        this.begin.setInteractive();

        this.input.on('pointerup', function (pointer) {

            this.scene.start('play');

        }, this);
        // this.add.text(20,20,"loading game..");
        // this.scene.start("play");
    }
   
   
}
