Block = function(game, pos, img)
{
    Phaser.Sprite.call(this, game, pos.x, pos.y, img);
    this.anchor.setTo(0.5, 0.5);
    this.playerSpeed = 1;
};

Block.prototype = Object.create(Phaser.Sprite.prototype);
Block.prototype.constructor = Block;

Block.prototype.update = function()
{
    if(this.game.input.mousePointer.isDown(Phaser.Keyboard.leftButton))
    {
        this.x -= this.playerSpeed;
    }

};
