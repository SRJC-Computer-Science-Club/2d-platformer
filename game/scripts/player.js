Player = function(game, pos, img)
{
    Phaser.Sprite.call(this, game, pos.x, pos.y, img);
    this.anchor.setTo(0.5, 0.5);
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))
    {
        this.angle += 1;
    }
};
