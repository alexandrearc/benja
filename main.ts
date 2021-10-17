namespace SpriteKind {
    export const donuts = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (charmander.vy == 0) {
        charmander.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.donuts, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(true)
})
let Donuts: Sprite = null
let charmander: Sprite = null
scene.setBackgroundColor(9)
charmander = sprites.create(assets.image`Charmander`, SpriteKind.Player)
controller.moveSprite(charmander, 100, 0)
tiles.setTilemap(tilemap`Level 1`)
charmander.ay = 200
scene.cameraFollowSprite(charmander)
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    Donuts = sprites.create(assets.image`Donuts`, SpriteKind.donuts)
    tiles.placeOnTile(Donuts, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
