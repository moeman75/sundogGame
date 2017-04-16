//player group used for the sprite control
var StageSelect;
var player;
var weston;
var chair;
var chairList =[];
var speedPlayer;
//used for structures and player sprite grouping
var floorGroup, levelGroup, doorframes;
var doorframe=[];
var levelx = 0;
var levely = 0;
var SCALE = 1.0;
//var controls;
var Ndown = false, Sdown = false, Edown = false, Wdown = false, 
SEdown = false, NEdown = false, SWdown = false, NWdown = false;
// var exitMarker;
// var music;
// var level;

//levels are setup with directions like this
//             / \
//              |
//          northwest
// <- northeast + southwest ->
//          southeast
//              |
//             \ /
//testing
//

//correct orientations EX:


var levels = [
    //fourth floor
    //33 width x 53 height
[
[3, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3],
[4, 6, 12, 0, 0, 0, 36, 6, 12, 55, 69, 6, 12, 0, 0, 7, 20, 30, 30, 21, 9, 36, 0, 63, 0, 0, 36, 0, 0, 11, 28, 9, 57], 
[4, 29, 0, 0, 0, 0, 36, 29, 0, 0, 69, 29, 0, 0, 0, 25, 0, 0, 0, 19, 26, 36, 62, 40, 61, 0, 36, 0, 0, 0, 0, 26, 57], 
[4, 10, 23, 0, 0, 0, 36, 29, 61, 0, 69, 29, 61, 0, 0, 24, 51, 0, 0, 0, 27, 36, 0, 19, 0, 0, 36, 0, 0, 0, 0, 27, 57],
[4, 0, 0, 0, 0, 0, 36, 10, 23, 0, 69, 10, 23, 0, 0, 10, 23, 0, 0, 22, 8, 36, 0, 0, 0, 0, 36, 0, 0, 0, 22, 8, 57], 
[4, 35, 35, 33, 39, 35, 37, 66, 66, 0, 0, 66, 66, 0, 0, 66, 66, 0, 0, 66, 66, 36, 35, 33, 39, 35, 37, 0, 0, 0, 0, 0, 57], 
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 63, 0, 57],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0,  62, 40, 0, 57], 
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 57],
[4, 55, 0, 7, 20, 0, 0, 21, 9, 0, 55, 7, 20, 0, 0, 21, 9, 67, 0, 0, 0, 55, 0, 0, 0, 0, 36, 35, 35, 35, 35, 35, 57],
[4, 0, 0, 25, 0, 0, 0, 0, 26, 0, 0, 25, 0, 0, 0, 0, 26, 67, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 63, 0, 0, 57],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 0, 0, 43, 43, 43, 0, 0, 38, 0, 62, 41, 61, 0, 57],
[4, 0, 0, 10, 23, 60, 60, 22, 8, 0, 0, 10, 23, 60, 60, 22, 8, 67, 0, 0, 0, 43, 43, 43, 0, 0, 36, 0, 62, 44, 61, 0, 57],
[4, 0, 0, 7, 20, 59, 58, 21, 9, 0, 0, 7, 20, 59, 58, 21, 9, 67, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 62, 42, 61, 0, 57],
[4, 0, 0, 25, 0, 0, 0, 0, 26, 0, 0, 25, 0, 0, 0, 0, 26, 67, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 19, 0, 0, 57],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 0, 0, 43, 43, 43, 0, 0, 36, 35, 35, 35, 35, 35, 57],
[4, 0, 0, 10, 23, 0, 0, 22, 8, 0, 0, 10, 23, 0, 0, 22, 8, 67, 0, 0, 0, 43, 43, 43, 0, 0, 36, 0, 0, 0, 0, 0, 57],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 0, 0, 0, 0, 57],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 57],
[2, 55, 0, 7, 20, 0, 0, 21, 9, 45, 35, 35, 35, 35, 35, 35, 35, 35, 0, 0, 45, 35, 35, 35, 35, 35, 37, 35, 35, 35, 35, 35, 3],
[2, 0, 0, 25, 0, 0, 0, 0, 26, 36, 0, 0, 63, 63, 63, 0, 0, 36, 0, 0, 36, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
[2, 0, 0, 24, 0, 0, 0, 0, 27, 36, 0, 62, 64, 44, 65, 61, 0, 36, 0, 0, 36, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70],
[2, 0, 0, 10, 23, 60, 60, 22, 8, 36, 0, 0, 19, 19, 19, 0, 47, 46, 0, 0, 36, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70],
[2, 0, 0, 7, 20, 59, 58, 21, 9, 36, 0, 0, 0, 0, 49, 50, 48, 0, 0, 0, 36, 70, 0, 0, 70, 70, 70, 70, 70, 70, 70, 70, 70],
[2, 0, 0, 25, 0, 0, 0, 0, 26, 36, 0, 0, 0, 53, 52, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[2, 0, 0, 24, 0, 0, 0, 0, 27, 36, 0, 49, 50, 48, 0, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[2, 55, 0, 10, 23, 0, 0, 22, 8, 36, 47, 46, 0, 0, 0, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 70, 70, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 34, 71, 70, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 7, 20, 0, 0, 21, 9, 67, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 36, 70, 70, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 25, 0, 0, 0, 0, 26, 67, 0, 0, 36, 0, 0, 0, 0, 0, 1, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 0, 36, 0, 0, 0, 0, 0, 0, 49, 37, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 55, 0, 10, 23, 60, 60, 22, 8, 67, 0, 0, 0, 0, 0, 0, 0, 0, 47, 46, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 7, 20, 59, 58, 21, 9, 67, 0, 0, 0, 0, 0, 0, 49, 50, 48, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0,70],
[4, 0, 0, 25, 0, 0, 0, 0, 26, 67, 0, 0, 0, 0, 0, 53, 52, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 0, 0, 49, 50, 48, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 10, 23, 0, 0, 22, 8, 67, 0, 0, 47, 46, 0, 63, 0, 63, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 48, 0, 62, 64, 44, 65, 61, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 0, 0, 19, 0, 19, 0, 19, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 35, 35, 35, 35, 35, 35, 35, 35, 37, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 7, 20, 0, 0, 21, 9, 67, 0, 36, 0, 0, 63, 0, 63, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 55, 0, 25, 0, 0, 0, 0, 26, 67, 0, 38, 0, 62, 64, 44, 65, 61, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 38, 0, 0, 19, 0, 19, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 10, 23, 60, 60, 22, 8, 67, 0, 34, 0, 0, 0, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 7, 20, 59, 58, 21, 9, 67, 0, 36, 35, 35, 35, 35, 35, 35, 35, 35, 37, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 25, 0, 0, 0, 0, 26, 67, 0, 32, 62, 7, 28, 12, 12, 36, 70, 70, 70, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 24, 0, 0, 0, 0, 27, 67, 0, 0, 0, 0, 19, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 10, 23, 0, 0, 22, 8, 67, 0, 0, 68, 68, 68, 68, 68, 36, 70, 0, 0, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 62, 7, 28, 12, 12, 36, 70, 0, 0, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 70, 0, 0, 70, 0, 0, 70, 0, 0, 70, 0, 70, 0, 0, 70],
[2, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 56, 37, 70, 70, 70, 70, 70, 70, 70, 0, 0, 0, 0, 0, 0, 0, 70],
]
//more levels here
];
            

//==================================================//


var init = function () {
    
    console.log("init() called");
    
    var game = new Phaser.Game(900, 600, Phaser.AUTO, 'test', null, false, true);
    
    var BasicGame = function (game) { };
    
    BasicGame.Boot = function (game) { };
    
    BasicGame.Boot.prototype =
    {
        
        preload: function () {
            //console.log("loadWorld() called");
 
            //game.world.setBounds(0, -window.innerHeight * 0.3, 5120, 5120);
            game.world.setBounds(0, -window.innerHeight * 0.3, 4028, 1500);
            
            //set bounds, physics, timer, anchor, and adds isometric game
            game.plugins.add(new Phaser.Plugin.Isometric(game));
            
            //========================loading assets==========================//

            loadWorld();
                        
            //========================setting game settings==========================//
            
            //start the physical system
            game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
            
            //sets middle of screen
            game.iso.anchor.setTo(0.5, 0);
        },
        create: function () {
            var num = 0;            
            var l = levels[num];
            var frame = 0;
            var tile;
            //==================================================//
            
            createEachGroup();
            
            //used for the fps debugging
            game.time.advancedTiming = true;
            
            game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
            
            // we won't really be using IsoArcade physics, but I've enabled it anyway so the debug bodies can be seen
            //floorGroup.enableBody = true;
            //floorGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;
    
            // set the gravity in our game
	        game.physics.isoArcade.gravity.setTo(0, 0, -500);
    
            //==================================================//

            var tiles = [
            'groundTile',       //0
            'player',           //1
            
            'WallV1',           //2
            'WallV2',           //3
            
            'WindowTileV1',     //4
            'WindowTileV2',     //5
            
            'DeskCornerV1',     //6
            'DeskCornerV2',     
            'DeskCornerV3',     
            'DeskCornerV4',     
            'DeskCornerV5',     //10
            
            'DeskDrawerV1',     //11
            'DeskDrawerV2',     
            'DeskDrawerV3',     
            'DeskDrawerV4',     //14
            
            'DeskArmV1',        //15
            'DeskArmV2',         
            'DeskArmV3',        
            'DeskArmV4',        //18
            
            'DeskChairV1',      //19
            
            'DeskArmV1_f',      //20
            'DeskArmV2_f',      
            'DeskArmV3_f',      
            'DeskArmV4_f',      //23
            
            'DeskDrawerV1_f',   //24
            'DeskDrawerV2_f',   
            'DeskDrawerV3_f',   
            'DeskDrawerV4_f',   //27
            
            'DeskTableTopV1',   //28
            'DeskTableTopV1_f', //29
            
            'DeskTableTopV2',   //30
            
            'DividerWallV1',    //31
            'DividerWallV2',    
            'DoorFrameV1',      
            'DoorFrameV2',      
            'InternalWallV1',   
            'InternalWallV2',  
            'InternalWallV3',   
            'InternalWallV4',   
            'InternalWallV5',   //39
            
            'CircularTableV1',  //40            
            'CircularTableV2', 
            'CircularTableV3',  
            'TallTableV1',      //43
            
            'SquareSmallTableV1',//44
            'InternalWallV6',   
            'InternalWallSlantV1',
            'InternalWallSlantV2',
            'InternalWallSlantV3',
            'InternalWallSlantV4',
            'InternalWallSlantV5',//50
            
            'weston',         //51
            
            'InternalWallDoorFrameV6',
            'InternalWallDoorFrameV7',//53
            
            'InternalWallPillerV1',
            'InternalWallPillerV2', //55
            
            'WindowTileV3',     
            'WindowTileV4',     //57
            
            'LargeCabinetV1',
            'LargeCabinetV2',   
            'LargeCabinetV3',   //60
            
            'DeskChairV2',
            'DeskChairV3',
            'DeskChairV4',      //63
            
            'CircularTableV4',
            'CircularTableV5',  //65
            
            'DividerWallThinV1',
            'DividerWallThinV2',
            'DividerWallThinV3',
            'DividerWallThinV4',//69
            
            'BlackCeiling',     
            'NextStage'         //71
            
            ];
            
            //==================================================//
            
            levelx = l.length;
            levely = l[0].length;
            var tilesProcessed = 0;
            for (var y = 0; y<levely; y++) {
                for (var x = 0; x<levelx; x++) {
                    tilesProcessed++;
                    
                    var spr = tiles[l[x][y]];
                    var xx = x * 38 * SCALE;
                    var yy = y * 38 * SCALE;

                    //===logic for categorizing 'spr' into which should have size and physics changes===//
                    //player - needs first or game does not get created
                    //NPCs - <custom behavior in the future.>
                    //NPCs
                    //etc...
                    //else {
                        //chairs    
                            //four different directions for chair
                        //door frames
                        //ground
                            //drawers
                            //divider walls
                            //inner pillars
                            //other assets
                    //}
                    
                    //==================================================//
                    
                    //spr, xx, yy method
                    
                    
                    spriteConfig(spr, xx, yy, tile, frame);
                    
                    //==================================================//
                }
            }
            
            
            
            console.log("total tiles processed: " + tilesProcessed);
                        
            //=======================music===========================//
            
            //adds background color = #626469 which is light grey
            game.stage.backgroundColor = "#626469";
            
            //adds music
            console.log("music init.");
            //music = game.add.audio('smash!');
            
            //loops here for entry of button
            //while() {
            //plays the music
            //music.play();
            //}
            
            //uncomment this for music
            //music.play();

            //========================character controls==========================//
            
            this.cS = game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            this.cW = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            this.cE = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            this.cN = game.input.keyboard.addKey(Phaser.Keyboard.UP);
            
            game.input.keyboard.addKeyCapture([ 
                Phaser.Keyboard.LEFT, 
                Phaser.Keyboard.RIGHT, 
                Phaser.Keyboard.UP,
                Phaser.Keyboard.DOWN,
                ]);
            
            //make the camera follow the player
            game.camera.follow(player);
        },
        update: function () {
            //other Character Variables
            weston.animations.play('standing');

            // player variables
            // Player speed used as a constant
	        var speed = 100;
	        
            // notice this is not part of an else, this can be detected in addition to the previous
            if (game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
              // shift key is down (speed) so double our velocity value
              speed = speed * 2;
            }
            
	        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        
        //using the Up, Down, Left, Right key
        if (this.cN.isDown) 
        {
            Ndown = true;
        	player.body.velocity.y = -speed;
        	player.body.velocity.x = -speed;
        	if(this.cE.isDown) 
        	{
        	    Ndown = false;
        	    NEdown = true;
        	    player.body.velocity.x = 0;
        	}
        	else if(this.cW.isDown)
        	{
        	    Ndown = false;
        	    NWdown = true;
        	    player.body.velocity.y = 0;
        	}
        	else if(this.cS.isDown)
        	{
        	    Ndown = false;
        	    player.body.velocity.y = 0;
        	    player.body.velocity.x = 0;
        	}
        }
        else if (this.cS.isDown)
        {
            Sdown = true;
        	player.body.velocity.y = speed;
        	player.body.velocity.x = speed;
        	if(this.cE.isDown) 
        	{
        	    Sdown = false;
        	    SEdown = true;
        	    player.body.velocity.y = 0;
        	}
        	else if(this.cW.isDown)
        	{
        	    Sdown = false;
        	    SWdown = true;
        	    player.body.velocity.x = 0;
        	}
        	else if(this.cN.isDown)
        	{
        	    Sdown = false;
        	    player.body.velocity.y = 0;
        	    player.body.velocity.x = 0;
        	}
        }
        else if (this.cE.isDown) 
        {
            Edown = true;
        	player.body.velocity.x = speed;
        	player.body.velocity.y = -speed;
        	if(this.cW.isDown)
        	{
        	    Edown = false;
        	    player.body.velocity.y = 0;
        	    player.body.velocity.x = 0;
        	}
        }
        else if (this.cW.isDown)
        {
            Wdown = true;
        	player.body.velocity.x = -speed;
        	player.body.velocity.y = speed;
        	if(this.cE.isDown)
        	{
        	    Wdown = false;
        	    player.body.velocity.y = 0;
        	    player.body.velocity.x = 0;
        	}
        }
        else
        {
        	player.body.velocity.x = 0;
        	player.body.velocity.y = 0;
        }
        
        //which direction boolean activates which animation to play
        if (Ndown == true) 
        {
        	player.animations.play('N');
        }
        else if (Sdown == true)
        {
        	player.animations.play('S');
        }
        else if (Edown == true) 
        {
        	player.animations.play('E');
        }
        else if (Wdown == true)
        {
        	player.animations.play('W');
        }
        else if (SEdown == true)
        {
        	player.animations.play('SE');
        }
        else if (SWdown == true)
        {
        	player.animations.play('SW');
        }
        else if (NWdown == true)
        {
        	player.animations.play('NW');
        }
        else if (NEdown == true)
        {
        	player.animations.play('NE');
        }
        else
        {
        	player.animations.stop();
        }
        
        Ndown = false, Sdown = false, Edown = false, Wdown = false, 
        SEdown = false, NEdown = false, SWdown = false, NWdown = false;
            
	        game.physics.isoArcade.collide(levelGroup);
	        //this is used to sort the depth of the tiles
            game.iso.topologicalSort(levelGroup);
            
            overLapCheck(player, StageSelect);
        },
        
        render: function () {
            
            //game.debug.soundInfo(music, 20, 32);
            
            //==================================================//
            
            game.debug.body(player);
            //game.debug.body(weston);
            //game.debug.body(chair);
            
            game.debug.spriteInfo(player, 32, 32);
            game.debug.text(game.time.fps || '--', 2, 14, "#000");
            game.debug.text(Phaser.VERSION, 2, game.world.height - 2, "#ffff00");
        }
    };
    
    var spriteConfig = function (spr, xx, yy, tile, frame) {
        
        //this places a base groundTile object
        //the z coord is half the overall width of one tile
        tile = game.add.isoSprite(xx, yy, -40 * SCALE, 'groundTile', 0, floorGroup);
        tile.anchor.set(0.5,1);
        tile.scale.set(SCALE); 
        //add if for player
        if(spr == 'player')
        {
            //trying to find why the player sprite is spawning under a few other sprites
            //set to -32 for the size of the sprite
            player = game.add.isoSprite(xx, yy, -32 * SCALE, 'customCharacter', 0, levelGroup);
            player.anchor.set(0.5, 1);
            player.scale.setTo(0.9);
            //=======================walking animations===========================//
            
            // custom Person sprite animation loading and setting
            
            speedPlayer = 6;
            
            player.animations.add('SW', [1, 0, 1, 2], speedPlayer, true);
            player.animations.add('W',  [4, 3, 4, 5], speedPlayer, true);
            player.animations.add('SE', [7, 6, 7, 8], speedPlayer, true);
            player.animations.add('E',  [10, 9, 10, 11], speedPlayer, true);
            player.animations.add('S',  [13, 12, 13, 14], speedPlayer, true);
            player.animations.add('N',  [16, 15, 16, 17], speedPlayer, true);
            player.animations.add('NW', [19, 18, 19, 20], speedPlayer, true);
            player.animations.add('NE', [22, 21, 22, 23], speedPlayer, true);

            //enables physics on the player
            game.physics.isoArcade.enable(player);
            player.body.collideWorldBounds = true;
            
            // x, y, z
            player.body.setSize(20, 20, 1);
        }
        //animated characters in the office
        else if(spr=='weston')
        {
            weston = game.add.isoSprite(xx+4, yy+4, -32 * SCALE, 'weston', 0, levelGroup)
            weston.anchor.set(0.5, 1);
            weston.scale.setTo(1);
            
            weston.animations.add('standing', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 6, true);
            
            game.physics.isoArcade.enable(weston);
            weston.body.collideWorldBounds = true;
            
            // x, y, z
            weston.body.setSize(20,20,1);
            weston.body.bounce.set(1, 1, 0);
            weston.body.drag.set(200, 200, 0);
        }
        //else if()
        //{
        //} //end of characters in office
        else
        {
            if(spr=='DeskChairV1'||spr=='DeskChairV2'||spr=='DeskChairV3'||spr=='DeskChairV4')
            {
                //console.log('called chair group');
                if(spr=='DeskChairV1')
                {
                    chair = game.add.isoSprite(xx, yy, -35 * SCALE, 'DeskChairV1', 0, levelGroup);
                }
                else if(spr=='DeskChairV2')
                {
                    chair = game.add.isoSprite(xx, yy, -35 * SCALE, 'DeskChairV2', 0, levelGroup);
                }
                else if(spr=='DeskChairV3')
                {
                    chair = game.add.isoSprite(xx, yy, -35 * SCALE, 'DeskChairV3', 0, levelGroup);
                }
                else if(spr=='DeskChairV4')
                {
                    chair = game.add.isoSprite(xx, yy, -35 * SCALE, 'DeskChairV4', 0, levelGroup);
                }
                chair.anchor.set(0.5, 1);
                chair.scale.setTo(1);
                
                game.physics.isoArcade.enable(chair);
                chair.body.collideWorldBounds = true;
                
                // x, y, z
                if(spr=='DeskChairV1'||spr=='DeskChairV3')
                {
                    chair.body.setSize(30, 20, 1);
                }
                else if(spr=='DeskChairV2'||spr=='DeskChairV4')
                {
                    chair.body.setSize(20, 30, 1);
                }
                
                chair.body.bounce.set(1, 1, 0);
                chair.body.drag.set(100, 100, 0);
                
                chairList.push(chair);
            }
            else if(spr=='DoorFrameV1'||spr=='DoorFrameV2'||spr=='InternalWallDoorFrameV6'||spr=='InternalWallDoorFrameV7')
            {
                //console.log('called door frame group');
                doorframe[frame] = game.add.isoSprite(xx, yy, -35 * SCALE, spr, 0, doorframes)
                doorframe[frame].type = spr;
                doorframe[frame].scale.set(SCALE);
                doorframe[frame].anchor.set(0.5,1);
                game.physics.isoArcade.enable(doorframe);
                doorframe[frame].body.moves = false;
                doorframe[frame++].body.immovable = true;
            }
            else if(spr != 'groundTile')
            {
                
                if(spr=='DeskDrawerV3'||spr=='DeskDrawerV4'||spr=='DeskDrawerV3_f'||spr=='DeskDrawerV4_f')
                {
                    //corects postioning issues with these tiles
                    xx -= 4;
                    yy -= 3;
                }
                else if(spr=='DividerWallThinV3')
                {
                    xx += 35;
                }
                else if(spr=='DividerWallThinV4')
                {
                    yy += 35;
                }
                //the z coord is half the overall width of one object
                tile = game.add.isoSprite(xx, yy, -35 * SCALE, spr, 0, levelGroup);
                tile.type = spr;
                tile.scale.set(SCALE);
                tile.anchor.set(0.5,1);
                game.physics.isoArcade.enable(tile);
                tile.body.collisionWorldBounds = true;
                if(spr=='InternalWallPillerV1'||spr=='InternalWallPillerV2'||spr=='InternalWallSlantV3')
                {
                    tile.body.setSize(15, 15, 1);
                }
                else if(spr=='InternalWallSlantV1')
                {
                    tile.body.setSize(20, 35, 1);
                }
                else if(spr=='LargeCabinetV1'||spr=='LargeCabinetV2'||spr=='LargeCabinetV3')
                {
                    tile.body.setSize(25, 35, 1);
                }
                else if(spr=='DeskArmV1'||spr=='DeskArmV2')
                {
                    tile.body.setSize(35, 25, 1);
                }
                else if(spr=='DeskArmV1_f'||spr=='DeskArmV2_f')
                {
                    tile.body.setSize(25, 35, 1);
                }
                else if(spr=='DividerWallThinV1')
                {
                    tile.body.setSize(10, 35, 1);
                }
                else if(spr=='DividerWallThinV2')
                {
                    tile.body.setSize(35, 10, 1);
                }
                else if(spr=='DividerWallThinV3')
                {
                    tile.body.setSize(1, 35, 1);
                }
                else if(spr=='DividerWallThinV4')
                {
                    tile.body.setSize(35, 1, 1);
                }
                else if(spr=='BlackCeiling')
                {
                    tile.body.setSize(35, 35, 1);
                }
                else if(spr=='NextStage')
                {
                    StageSelect = game.add.isoSprite(xx, yy, -35 * SCALE, spr, 0, levelGroup);
                    tile.body.setSize(35, 35, 0);
                }
                //these should be conditionally applied to the correct tiles
                tile.body.moves = false;
                tile.body.immovable = true;
            }
        }
        //add else and and if inside that points to everything thats not the groundTile
    };
    
    var playerControls = function(player, speed) {
        
    };
    
    var overLapCheck = function(spr1, spr2) {
        var boundsA = spr1.getBounds();
        var boundsB = spr2.getBounds();
            
        if(Phaser.Rectangle.intersects(boundsA, boundsB)) { 
            return true;
        } else {
            return false;
        }
    };
    
    var loadWorld = function () {
        console.log("loadWorld() called");
        //game.load.image('name_of_item', 'location');
        game.load.image('groundTile', 'assets/images/0_groundTileV2.png');
        
        //sprites character sheet with size of sprite
        game.load.spritesheet('customCharacter', 'assets/images/1_customCharacter.png', 40, 96);
        game.load.spritesheet('weston', 'assets/images/51_Weston.png', 40, 96);
        game.load.spritesheet('DeskChairV1', 'assets/images/19_DeskChairV1.png', 70, 120);
        
        game.load.image('WallV1', 'assets/images/2_WallV1.png');
        game.load.image('WallV2', 'assets/images/3_WallV2.png');
        
        game.load.image('WindowTileV1', 'assets/images/4_WindowTileV1.png');
        game.load.image('WindowTileV2', 'assets/images/5_WindowTileV2.png');
        
        game.load.image('DeskCornerV1', 'assets/images/6_DeskCornerV1.png');
        game.load.image('DeskCornerV2', 'assets/images/7_DeskCornerV2.png');
        game.load.image('DeskCornerV3', 'assets/images/8_DeskCornerV3.png');
        game.load.image('DeskCornerV4', 'assets/images/9_DeskCornerV4.png');
        game.load.image('DeskCornerV5', 'assets/images/10_DeskCornerV5.png');
        
        game.load.image('DeskDrawerV1', 'assets/images/11_DeskDrawerV1.png');
        game.load.image('DeskDrawerV2', 'assets/images/12_DeskDrawerV2.png');
        game.load.image('DeskDrawerV3', 'assets/images/13_DeskDrawerV3.png');
        game.load.image('DeskDrawerV4', 'assets/images/14_DeskDrawerV4.png');
        
        game.load.image('DeskArmV1', 'assets/images/15_DeskArmV1.png');
        game.load.image('DeskArmV2', 'assets/images/16_DeskArmV2.png');
        game.load.image('DeskArmV3', 'assets/images/17_DeskArmV3.png');
        game.load.image('DeskArmV4', 'assets/images/18_DeskArmV4.png');
        
        game.load.image('DeskArmV1_f', 'assets/images/20_DeskArmV1_f.png');
        game.load.image('DeskArmV2_f', 'assets/images/21_DeskArmV2_f.png');
        game.load.image('DeskArmV3_f', 'assets/images/22_DeskArmV3_f.png');
        game.load.image('DeskArmV4_f', 'assets/images/23_DeskArmV4_f.png');
        
        game.load.image('DeskDrawerV1_f', 'assets/images/24_DeskDrawerV1_f.png');
        game.load.image('DeskDrawerV2_f', 'assets/images/25_DeskDrawerV2_f.png');
        game.load.image('DeskDrawerV3_f', 'assets/images/26_DeskDrawerV3_f.png');
        game.load.image('DeskDrawerV4_f', 'assets/images/27_DeskDrawerV4_f.png');
        
        game.load.image('DeskTableTopV1', 'assets/images/28_DeskTableTopV1.png');
        game.load.image('DeskTableTopV1_f', 'assets/images/29_DeskTableTopV1_f.png');
        
        game.load.image('DeskTableTopV2', 'assets/images/30_DeskTableTopV2.png');
        
        game.load.image('DividerWallV1', 'assets/images/31_DividerWallV1.png');
        game.load.image('DividerWallV2', 'assets/images/32_DividerWallV2.png');
        game.load.image('DoorFrameV1', 'assets/images/33_DoorFrameV1.png');
        game.load.image('DoorFrameV2', 'assets/images/34_DoorFrameV2.png');
        game.load.image('InternalWallV1', 'assets/images/35_InternalWallV1.png');
        game.load.image('InternalWallV2', 'assets/images/36_InternalWallV2.png');
        
        game.load.image('InternalWallV3', 'assets/images/37_InternalWallV3.png');
        game.load.image('InternalWallV4', 'assets/images/38_InternalWallV4.png');
        game.load.image('InternalWallV5', 'assets/images/39_InternalWallV5.png');
        game.load.image('InternalWallV6', 'assets/images/45_InternalWallV6.png');
        
        game.load.image('CircularTableV1', 'assets/images/40_CircularTableV1.png');
        game.load.image('CircularTableV2', 'assets/images/41_CircularTableV2.png');
        game.load.image('CircularTableV3', 'assets/images/42_CircularTableV3.png');
        
        game.load.image('TallTableV1', 'assets/images/43_TallTableV1.png');
        
        game.load.image('SquareSmallTableV1', 'assets/images/44_SquareSmallTableV1.png');
        
        game.load.image('InternalWallSlantV1', 'assets/images/46_InternalWallSlantV1.png');
        game.load.image('InternalWallSlantV2', 'assets/images/47_InternalWallSlantV2.png');
        game.load.image('InternalWallSlantV3', 'assets/images/48_InternalWallSlantV3.png');
        game.load.image('InternalWallSlantV4', 'assets/images/49_InternalWallSlantV4.png');
        game.load.image('InternalWallSlantV5', 'assets/images/50_InternalWallSlantV5.png');
        
        game.load.image('InternalWallDoorFrameV6', 'assets/images/52_InternalWallDoorFrameV6.png');
        game.load.image('InternalWallDoorFrameV7', 'assets/images/53_InternalWallDoorFrameV7.png');

        game.load.image('InternalWallPillerV1', 'assets/images/54_InternalWallPillerV1.png');
        game.load.image('InternalWallPillerV2', 'assets/images/55_InternalWallPillerV2.png');
        
        game.load.image('WindowTileV3', 'assets/images/56_WindowTileV3.png');
        game.load.image('WindowTileV4', 'assets/images/57_WindowTileV4.png');
        
        game.load.image('LargeCabinetV1', 'assets/images/58_LargeCabinetV1.png');
        game.load.image('LargeCabinetV2', 'assets/images/59_LargeCabinetV2.png');
        game.load.image('LargeCabinetV3', 'assets/images/60_LargeCabinetV3.png');
        
        game.load.image('DeskChairV2', 'assets/images/61_DeskChairV2.png');
        game.load.image('DeskChairV3', 'assets/images/62_DeskChairV3.png');
        game.load.image('DeskChairV4', 'assets/images/63_DeskChairV4.png');
        
        game.load.image('CircularTableV4', 'assets/images/64_circularTableV4.png');
        game.load.image('CircularTableV5', 'assets/images/65_circularTableV5.png');
        
        game.load.image('DividerWallThinV1', 'assets/images/66_DividerWallThinV1.png');
        game.load.image('DividerWallThinV2', 'assets/images/67_DividerWallThinV2.png');
        game.load.image('DividerWallThinV3', 'assets/images/68_DividerWallThinV3.png');
        game.load.image('DividerWallThinV4', 'assets/images/69_DividerWallThinV4.png');
        
        game.load.image('BlackCeiling', 'assets/images/70_BlackCeiling.png');
        game.load.image('NextStage', 'assets/images/71_NextStage.png');
        
        //game.load.spriteshet('name_of_sprite', 'location');
        //game.load.audio('smash!', 'assets/music/Smash!_-_Starbomb.ogg');
        
        //uses the png of the groundTile image
        //game.load.atlasJSONHash('tileSet', 'assets/images/spritesV1.png', 'assets/images/spritesV1.json');
    };
    
    var createEachGroup = function() {
        floorGroup = game.add.group();
        levelGroup = game.add.group();
        doorframes = game.add.group();
    };
    
    game.state.add('Boot', BasicGame.Boot);
    game.state.start('Boot');
}

window.onload = init;
