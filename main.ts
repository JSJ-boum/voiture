input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    GO += 1
})
let GO = 0
basic.forever(function () {
    if (GO) {
        servos.P0.setAngle(90)
        basic.pause(1000)
        servos.P0.setAngle(180)
        basic.pause(1000)
    }
})
