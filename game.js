var gamesettings={
    playerSpeed: 200
}
window.onload=function(){
 var  config={
        type:Phaser.CANVAS,
        width:800,
        height:600,
        backgroundColor:0x000000,
        scene:[Scene1,Scene2,Gameover],
        pixelArt:true,
        physics:{
            default:"arcade",
            arcade:{
                debug:false
            }
        }
    }
    var game = new Phaser.Game(config);
 
}

