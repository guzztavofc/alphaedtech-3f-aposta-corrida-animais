let rep1 = 5
let num1 = 5
for (let index = 0; index < rep1; index++) {
    if (num1 > 3) {
        basic.showIcon(IconNames.Heart)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showIcon(IconNames.No)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    num1 = num1 - 1
}
basic.forever(function () {
	
})
