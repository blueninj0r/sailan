// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    });
  },
 
  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height };
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});

// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid, Color');
  }
});

// Let's define the behavour of a rock!
Crafty.c('Rock', {
  init: function() {
    this.requires('Actor, Solid');
    this.color('rgb(143, 139, 126)');
  }
});

Crafty.c('Boat', {
	init: function () {
		this.requires('Actor, Fourway, Collision');
		this.fourway(4);
		this.color('rgb(184, 152, 28)');
		this.stopOnSolids();
	},
	stopOnSolids: function () {
		this.onHit('Solid', this.stopMovement);
	},
	stopMovement: function () {
		this._speed = 0;
		if (this._movement) { 
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	}
});