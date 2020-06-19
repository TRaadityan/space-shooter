class Gameover extends Phaser.Scene{
    constructor(){
        super("gameover");
    }
    create(){
     this.add.text(this.game.config.width / 2 , this.game.config.height / 2,"game over");
       
    }
}