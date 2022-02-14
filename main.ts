input.onButtonPressed(Button.A, function () {
    codbi.push(A)
    basic.showString(A)
})
input.onButtonPressed(Button.AB, function () {
    for (let valor of codbi) {
        basic.showString(valor)
        if (valor == A) {
            basic.showIcon(IconNames.Heart)
        } else {
            basic.showIcon(IconNames.Sad)
        }
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    codbi.push(B)
    basic.showString(B)
})
let B = ""
let A = ""
let codbi: string[] = []
codbi = []
A = "A"
B = "B"
basic.forever(function () {
	
})
