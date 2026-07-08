function 黄色チカチカ (回数: number) {
    for (let index = 0; index < 回数; index++) {
        黄()
        basic.pause(500)
        全消灯()
        basic.pause(500)
    }
}
function 全消灯 () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function 青 () {
    pins.analogWritePin(AnalogPin.P0, 255)
}
function 黄 () {
    pins.analogWritePin(AnalogPin.P1, 255)
}
function 赤 () {
    pins.analogWritePin(AnalogPin.P2, 255)
}
全消灯()
basic.forever(function () {
    青()
    basic.pause(1000)
    全消灯()
    黄色チカチカ(2)
    basic.pause(1000)
    全消灯()
    赤()
    basic.pause(1000)
    全消灯()
})
