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
    basic.showIcon(IconNames.SmallDiamond)
    if (animal == 1) {
        basic.showNumber(animal)
    } else if (animal == 2) {
        basic.showNumber(animal)
    } else {
        animal = 3
        basic.showNumber(animal)
    }
    escolha = randint(1, 3)
    basic.showIcon(IconNames.Heart)
    basic.showNumber(escolha)
    basic.pause(500)
    if (animal == escolha) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    animal = 0
})
let i = 0
let escolha = 0
let animal = 0
animal = 0
escolha = 0
i = 1
