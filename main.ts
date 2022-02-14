let hash = ""
let num = 0
function criarHash (parametro: number) {
    hash = ""
    num = parametro
    for (let index = 0; index < parametro % 4; index++) {
        if (num % 6 == 0) {
            hash = "" + hash + "a1"
        } else if (num % 2 == 0) {
            hash = "" + hash + "b2"
        } else if (num % 3 == 0) {
            hash = "" + hash + "c3"
        } else {
            hash = "" + hash + "x#"
        }
        num = num / 2
    }
    return hash
}
basic.forever(function () {
    basic.showString("" + (criarHash(18)))
})
