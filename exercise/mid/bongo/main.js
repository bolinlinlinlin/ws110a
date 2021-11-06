const KeyDatas = {
    'A': ['bongo', 0, 'left', 'sound_bongo0.mp3'],
    'D': ['bongo', 1, 'right', 'sound_bongo1.mp3'],
    '1': ['keyboard', 1, 'left', 'sound_keyboard1.mp3'],
    '2': ['keyboard', 2, 'left', 'sound_keyboard2.mp3'],
    '3': ['keyboard', 3, 'left', 'sound_keyboard3.mp3'],
    '4': ['keyboard', 4, 'left', 'sound_keyboard4.mp3'],
    '5': ['keyboard', 5, 'left', 'sound_keyboard5.mp3'],
    '6': ['keyboard', 6, 'right', 'sound_keyboard6.mp3'],
    '7': ['keyboard', 7, 'right', 'sound_keyboard7.mp3'],
    '8': ['keyboard', 8, 'right', 'sound_keyboard8.mp3'],
    '9': ['keyboard', 9, 'right', 'sound_keyboard9.mp3'],
    '0': ['keyboard', 0, 'right', 'sound_keyboard0.mp3'],
    ' ': ['meow', 0, 'mouth', 'sound_mp3']
}

/*for (const key in KeyDatas) {
    let [instrument, tone, action, music] = KeyDatas[key]
    let mp3 = './sounds/' + music
    let mp3Id = instrument + tone
    createjs.Sound.registerSound(mp3, mp3Id)
}*/


let keys = []

document.onkeydown = function (event) {
    event.preventDefault()
    key = event.key.toUpperCase()
    if (KeyDatas[key] != undefined) {
        if (keys.indexOf(key) == -1) {
            keys.push(key)
            console.log(key + ' - keydown')

            let [instrument, tone, action, music] = KeyDatas[key]
            createjs.Sound.play(instrument + tone)
            if (instrument == 'meow') {
                document.getElementById('mouth').className = 'on'
            } else {
                document.getElementById('instrument').className =
                    instrument
                if (action == 'left') {
                    document.getElementById('paw-left').className = 'down'
                } else if (action == 'right') {
                    document.getElementById('paw-right').className = 'down'

                }
            }
        }
    }
}

document.onkeyup = function (event) {
    event.preventDefault()
    key = event.key.toUpperCase()
    if (KeyDatas[key] != undefined) {
        console.log(key + ' - keyup')
        if (keys.indexOf(key) != -1) {
            keys.splice(keys.indexOf(key), 1)
        }
    }

    let [instrument, tone, action, music] = KeyDatas[key]

    if (action == 'mouth') {
        document.getElementById('mouth').className = 'on'
    } else if (action == 'left') {
        document.getElementById('paw-left').className = 'up'
    } else if (action == 'right') {
        document.getElementById('paw-right').className = 'up'

    }

}