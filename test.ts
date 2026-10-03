// Mbits extension smoke test (not shipped with the extension).
mbits.setPixelColor(0, 0, mbits.MbitsColor.Red)
mbits.setPixelRGB(4, 4, 255, 128, 0)
mbits.fillColor(mbits.MbitsColor.Blue)
mbits.showRainbow()
let b = mbits.colorBrightness(mbits.MbitsColor.Green)
mbits.clearMatrix()
