let janaria_2: game.LedSprite = null
let pacman = game.createSprite(2, 4)
let janaria = game.createSprite(4, 4)
let mamua = game.createSprite(2, 2)
mamua.set(LedSpriteProperty.Blink, 100)
mamua.set(LedSpriteProperty.Brightness, 100)
janaria.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    mamua.move(1)
    basic.pause(500)
    mamua.ifOnEdgeBounce()
    basic.pause(400)
    if (input.acceleration(Dimension.X) < 200) {
        pacman.move(-1)
    }
    if (input.acceleration(Dimension.X) > -200) {
        pacman.move(1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
    }
    if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
    }
    if (pacman.isTouching(janaria)) {
        game.addScore(1)
        janaria.delete()
        janaria_2 = game.createSprite(randint(0, 4), randint(0, 4))
    }
    if (game.createSprite(0, 0).isTouching(mamua)) {
        game.gameOver()
    }
})
