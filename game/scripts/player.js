player = function(game, pos, img)
{
    Phaser.Sprite.call(this, game, pos.x, pos.y, img);
    this.anchor.setTo(0.5, 0.5);
};

player.prototype = Object.create(Phaser.Sprite.prototype);
player.prototype.constructor = player;

player.prototype.update = function()
{
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.angle += 1;
    }
};
