input.onButtonPressed(Button.A, function () {
    if (i <= 3) {
        animal = animal + 1
        basic.showNumber(animal)
        i = i + 1
    }
    if (i > 3) {
        i = 1
        animal = 0
    }
})
input.onButtonPressed(Button.B, function () {
    escolha = randint(1, 3)
    basic.showIcon(IconNames.Heart)
    basic.showNumber(escolha)
    basic.pause(5000)
    if (animal == escolha || animal + 3 == escolha) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let i = 0
let escolha = 0
let animal = 0
animal = 0
escolha = 0
i = 1
