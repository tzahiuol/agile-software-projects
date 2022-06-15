// import Phaser from "phaser";

class Play extends Phaser.Scene {
    constructor() {
        super('PlayScene');
    }
      
    create ()
    {
        const map = this.make.tilemap({key: 'crystal_world_map'});
        const tileset1 = map.addTilesetImage('crystal_tileset_lev1', 'tiles-1');

        // creating environment and platform layers from tileset
        // ORDER OF CODE MATTERS - environment layer is behind platforms layer
        const platformsColliders = map.createStaticLayer('platforms_colliders', tileset1);
        const environment = map.createLayer('environment', tileset1);
        const platforms = map.createLayer('platforms', tileset1);

        // https://phaser.io/examples/v3/view/tilemap/set-colliding-by-property
        // Instead of setting collision by index, you can set collision via properties that you set up
        // in Tiled. You can assign properties to tiles in the tileset editor. Note: you need
        // to NOT have the collision editor or terrain editor open when you set them up.
        // This map has tiles with a boolean "collides" property, so we can do the following:
        platformsColliders.setCollisionByProperty({collides: true});
    }
}

export default Play;