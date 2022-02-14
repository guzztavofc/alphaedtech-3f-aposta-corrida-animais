function criarHash (parametro: number) {
    let parametro2 = 0
    hash = ""
    num = parametro2
    for (let index = 0; index < parametro2 % 4; index++) {
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
let num = 0
let hash = ""
basic.showString("" + (criarHash(18)))
