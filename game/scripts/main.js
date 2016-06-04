requirejs(["map","player"], function(util){



var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update });


function preload ()
{
    game.load.image('joshua', 'assets/joshua01.png');
    game.load.image('steven', 'assets/steven01.png');
    game.load.image('oran', 'assets/oran01.png');
    game.load.image('seaney', 'assets/seaney01.png');
    game.load.image('player', 'assets/alienGreen_swim1.png');
    game.load.image('block', 'assets/brickBrown.png');
}

function create ()
{
    game.stage.backgroundColor = "#BFEBFF"
    var  joshua = new Map(game, {x: game.world.width/4, y: game.world.height/4}, 'joshua');
    var steven = new Map(game, {x: 3*game.world.width/4, y: game.world.height/4}, 'steven');
    var oran = new Map(game, {x: game.world.width/4, y: 3*game.world.height/4}, 'oran');
    var seaney = new Map(game, {x: 3*game.world.width/4, y: 3*game.world.height/4}, 'seaney');
    var player = new Player(game, {x:game.world.width/2, y:game.world.width/2}, 'player');
    var block = new Map(game, {x: game.world.centerX, y: game.world.centerY}, 'block');
    game.add.existing(joshua);
    game.add.existing(steven);
    game.add.existing(oran);
    game.add.existing(seaney);
    game.add.existing(player);
    game.add.existing(block);
}

function update()
{

}



});
