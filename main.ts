input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(0, 5))
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 5))
    basic.pause(2000)
    basic.clearScreen()
})
