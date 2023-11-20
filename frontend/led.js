import five from 'johnny-five'

const board = new five.Board()

board.on('ready', () => {
    const led = new five.Led(11)
    const btn = new five.Button(2)

    // led.pulse(500)

    // btn.on('hold', () => {
    //     console.log('hold');
    // })

    btn.on('up', () => {
        led.fadeOut()
    })

    btn.on('down', () => {
        led.fadeIn(500)
    })
})