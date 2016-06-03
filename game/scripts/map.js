Map = function(game, pos, img)
{
    Phaser.Sprite.call(this, game, pos.x, pos.y, img);
    this.anchor.setTo(0.5, 0.5);
};

Map.prototype = Object.create(Phaser.Sprite.prototype);
Map.prototype.constructor = Map;

Map.prototype.update = function()
{
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.angle += 1;
    }
};
