Game = {

	map_grid: {
		width: 24,
		height: 16,
		tile: {
			width: 20,
			height: 20
		}
	},

	width: function () {
		return map_grid.width * map_grid.tile.width;
	},

	height: function () {
		return map_grid.height * map_grid.tile.height;
	},

  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
    Crafty.init(480, 320);
    Crafty.background('blue');

    Crafty.e('Boat').at(5, 5);

    for (var x = 0; x < Game.map_grid.width; x++) {
    	for (var y = 0; y < Game.map_grid.height; y++ ) {
    		var at_edge = x === 0 || x === (Game.map_grid.width - 1) || y === 0 || y === (Game.map_grid.height - 1);

    		if (at_edge)
    		{
    			Crafty.e('Rock').at(x, y);    			
    		}
    	}
    }
  }
}