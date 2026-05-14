input.onButtonPressed(Button.A, function () {
    radio.sendString("F")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("S")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(7)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < -400) {
        radio.sendString("L")
        basic.pause(200)
    } else if (input.acceleration(Dimension.X) > 400) {
        radio.sendString("R")
        basic.pause(200)
    }
})
