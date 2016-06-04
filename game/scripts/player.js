Player = function(game, pos, img)
{
    Phaser.Sprite.call(this, game, pos.x, pos.y, img);
    this.anchor.setTo(0.5, 0.5);
    var playerSpeed = 4;
    var yaxis = 0;
    var xaxis = 0;
};

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function()
{
  /*  if(this.game.input.keyboard.isDown(Phaser.Keyboard.A))
    {
        this.x -= this.playerSpeed;
    }
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.D))
    {
        this.x += this.playerSpeed;
    }
     if(this.game.input.keyboard.isDown(Phaser.Keyboard.W))
      {
          this.y -= this.playerSpeed;
      }
      if(this.game.input.keyboard.isDown(Phaser.Keyboard.S))
      {
          this.y += this.playerSpeed;
      }*/

      if(this.game.input.keyboard.isDown(Phaser.Keyboard.S))
      {
          yaxis = 1;
      }
      if(this.game.input.keyboard.isDown(Phaser.Keyboard.D))
      {
        xaxis = 1;
}
var mag = Math.sqrt( xaxis * xaxis + yaxis * yaxis );
      this.x += playerSpeed * xaxis/meg;
      this.y += playerSpeed * yaxis/mag;

};
