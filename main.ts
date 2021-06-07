bluetooth.onBluetoothConnected(function () {
    led.setBrightness(255)
    basic.showIcon(IconNames.Pitchfork)
})
bluetooth.onBluetoothDisconnected(function () {
	
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    str = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    bluetooth.uartWriteString("OK")
    for (let index = 0; index < 5; index++) {
        basic.showString(str)
        basic.showString(" ")
    }
    led.setBrightness(0)
})
let str = ""
led.setBrightness(255)
bluetooth.startUartService()
basic.showIcon(IconNames.Heart)
basic.pause(2000)
led.setBrightness(0)
