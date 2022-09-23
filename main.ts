input.onPinPressed(TouchPin.P1, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(suond, music.beat(BeatFraction.Quarter))
        suond += 14
    }
    suond = 294
})
let suond = 0
suond = 294
