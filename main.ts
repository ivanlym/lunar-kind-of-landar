namespace SpriteKind {
    export const ThrustKind = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorLight0, function (sprite, location) {
    land(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand8, function (sprite, location) {
    game.over(false, effects.splatter)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedWest, function (sprite, location) {
    land(4)
})
function land (multiplier: number) {
    if (mySprite.vy > 16) {
        game.over(false, effects.slash)
    } else {
        info.setScore(multiplier * info.life())
        game.over(true, effects.smiles)
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ax = THRUST
        thrustSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 2 5 . . . . . . . . . . . . . 
            2 2 5 d . . . . . . . . . . . . 
            . 2 5 . . . . . . . . . . . . . 
            2 2 5 d . . . . . . . . . . . . 
            . 2 5 . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorClosedNorth, function (sprite, location) {
    land(2)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    reset_thrust()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ax = 0 - THRUST
        thrustSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . 5 2 . 
            . . . . . . . . . . . . d 5 2 2 
            . . . . . . . . . . . . . 5 2 . 
            . . . . . . . . . . . . d 5 2 2 
            . . . . . . . . . . . . . 5 2 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.life() > 0) {
        mySprite.ay = GRAVITY - THRUST
        thrustSprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 4 4 d 7 7 7 7 d 4 4 . . . 
            . . . 4 5 5 5 5 5 5 5 5 4 . . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . 4 4 2 2 . . 2 2 4 4 . . . 
            . . . . 4 2 2 . . 2 2 4 . . . . 
            . . . . . 2 2 . . 2 2 . . . . . 
            . . . . . 2 2 . . 2 2 . . . . . 
            . . . . . 2 2 . . 2 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
info.onLifeZero(function () {
    reset_thrust()
})
function reset_thrust () {
    mySprite.ay = GRAVITY
    thrustSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    mySprite.ax = GRAVITY
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    land(10)
})
let thrustSprite: Sprite = null
let mySprite: Sprite = null
let GRAVITY = 0
let THRUST = 0
let idle = 0
THRUST = 20
GRAVITY = 4
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . . 2 1 1 1 1 1 1 2 . . 
    . . . . . . 2 1 5 5 5 5 1 2 . . 
    . . . . . . 2 1 1 1 1 1 1 2 . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.ay = GRAVITY
tiles.setTilemap(tiles.createTilemap(hex`18001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020202020202000000000000000000000000000000000000010101020202060606000000000000000202040402000000010101010202020602000000000000000202020202000000010101010102020202000000000000020202010101050000010101010101020202000000000000020101010101010002010101010101010202020303030303020101010101010102`, img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, [myTiles.transparency16,sprites.builtin.oceanDepths0,sprites.builtin.oceanSand8,sprites.dungeon.floorLight0,sprites.dungeon.doorLockedWest,sprites.dungeon.collectibleInsignia,sprites.dungeon.doorClosedNorth], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
effects.starField.startScreenEffect()
info.setLife(300)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
thrustSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.ThrustKind)
thrustSprite.setFlag(SpriteFlag.Ghost, true)
game.onUpdate(function () {
    if (controller.left.isPressed() || controller.right.isPressed() || controller.down.isPressed()) {
        info.changeLifeBy(-1)
    }
})
game.onUpdate(function () {
    thrustSprite.setPosition(mySprite.x, mySprite.y)
})
