var spacebar;
var score = 0 ;
var scoreText;
class Scene2 extends Phaser.Scene{
    constructor(){
        super("play");
    }
     
    
 preload()
 {
     this.load.image('background','assets/bg.png');
     this.load.spritesheet('ship','assets/ship.png',{
         frameWidth:16,
         frameHeight:16 });

       

         this.load.spritesheet('player','assets/player.png',{
             frameWidth:14,
             frameHeight:14
         });
       
         this.load.spritesheet('beam','assets/shoot.png',{
            frameWidth:14,
            frameHeight:14
        });
         
    //  this.load.image('ship',);
 }
    
    
 
    create()
    {
        spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
       
        

        this.bg= this.add.image(400,300,'background');
       
       
         
       this.ship=this.physics.add.sprite(this.game.config.width / 2 - 50, this.game.config.height / 2, "ship");
       this.ship.setScale(3);
        
    //    this.ship.depth=100;
       this.player=this.physics.add.sprite(this.game.config.width / 2 + 50, this.game.config.height / 2, "player");
       this.player.setScale(4);
       this.player.depth=100;
    //    this.beam=this.physics.add.sprite(this.game.config.width / 2 + 50, this.game.config.height / 2, "beam");
    //    this.beam.setScale(4);
     
    

      this.anims.create({
        key:"ship_anim",
        frames: this.anims.generateFrameNumbers("ship"),
        frameRate:20,
        repeat:-1
      });

      this.anims.create({
        key:"beam_anim",
        frames: this.anims.generateFrameNumbers("beam"),
        frameRate:20,
        repeat:-1
      });
     
    
      this.anims.create({
        key:"player_anim",
        frames: this.anims.generateFrameNumbers("player"),
        frameRate:20,
        repeat:-1
      });
     
  
     
     
     
     
      this.player.play("player_anim");
      this.ship.play("ship_anim");


     
      this.cursorKeys = this.input.keyboard.createCursorKeys();

      this.player.setCollideWorldBounds(true);
      this.projectiles=this.add.group();
      scoreText = this.add.text(16, 16, 'score: 0', { fontSize: '30px', fill: '#000' });

    }
    gameover(){
        this.scene.start('gameover');
    }
    
    kill(projectiles,ship){
        projectiles.destroy();
        this.resetship(ship);
        score += 10;
        scoreText.setText('score: ' + score);
    }
    
moveship(ship,speed){
    
    ship.y += speed;
    if(ship.y > this.game.config.height )
    {
        this.resetship(ship);
    }

}
resetship(ship){
    
    ship.y=0;
    var randomX = Phaser.Math.Between(2,this.game.config.width);
    ship.x = randomX;
    
}

// score(){
    

    
// }

update()
{
    this.physics.add.overlap(this.projectiles,this.ship,this.kill,null,this);
    this.physics.add.overlap(this.player,this.ship,this.gameover,null,this);
    
    this.moveship(this.ship,4);
    
this.movePlayerManager();
// if(this.cursorKeys.space.isDown)
if (Phaser.Input.Keyboard.JustDown(spacebar)){
    console.log("fire");
    this.shootbeam();
}
for(var i=0;i<this.projectiles.getChildren().length;i++){
    var beam =this.projectiles.getChildren()[i];
    beam.update();
}

    
}

shootbeam()
{
    var beam = new Beam(this);
    
    
}


movePlayerManager()
{
    this.player.body.velocity.x=0 ;
    this.player.body.velocity.y=0 ;
    if(this.cursorKeys.left.isDown){
        this.player.setVelocityX(-gamesettings.playerSpeed);
    }
    else if(this.cursorKeys.right.isDown){
        this.player.setVelocityX(gamesettings.playerSpeed);
    }

    if(this.cursorKeys.up.isDown){
        this.player.setVelocityY(-gamesettings.playerSpeed);
    }
    else if(this.cursorKeys.down.isDown){
        this.player.setVelocityY(gamesettings.playerSpeed);
    }
}

}