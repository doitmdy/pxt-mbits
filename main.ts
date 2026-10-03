/**
 * Elecrow Mbits extension for Microsoft MakeCode (micro:bit target).
 *
 * The Elecrow Mbits is a pocket-size, micro:bit-form-factor board built on the
 * ESP32-WROVER-B. Its headline feature versus the micro:bit is a 5x5 RGB LED
 * matrix (the micro:bit has a single-colour red matrix). It also carries
 * 2 programmable buttons, an accelerometer, a MEMS microphone, a speaker
 * and a temperature sensor.
 *
 * These blocks bring the Mbits 5x5 RGB matrix API into the MakeCode editor.
 * They compile for the micro:bit target and run in the simulator: because the
 * micro:bit matrix is single-colour, RGB colours are rendered as brightness
 * levels (see the "brightness of" block).
 */

//% weight=90 color=#E63022 icon="\uf0eb"
//% block="Mbits"
namespace mbits {

    /**
     * Named colours for the Mbits 5x5 RGB LED matrix.
     */
    export enum MbitsColor {
        //% block="red"
        Red = 0xFF0000,
        //% block="orange"
        Orange = 0xFFA500,
        //% block="yellow"
        Yellow = 0xFFFF00,
        //% block="green"
        Green = 0x00FF00,
        //% block="blue"
        Blue = 0x0000FF,
        //% block="indigo"
        Indigo = 0x4B0082,
        //% block="violet"
        Violet = 0x8A2BE2,
        //% block="pink"
        Pink = 0xFF69B4,
        //% block="white"
        White = 0xFFFFFF,
        //% block="black (off)"
        Black = 0x000000
    }

    function clampByte(v: number): number {
        return Math.constrain(Math.round(v), 0, 255)
    }

    function packRGB(r: number, g: number, b: number): number {
        return (clampByte(r) << 16) | (clampByte(g) << 8) | clampByte(b)
    }

    /**
     * Perceived brightness (0-255) of an RGB colour (Rec. 709 luminance).
     * This is how Mbits RGB colours are rendered on single-colour 5x5 matrices.
     */
    function luminance(color: number): number {
        const r = (color >> 16) & 0xFF
        const g = (color >> 8) & 0xFF
        const b = color & 0xFF
        return Math.round(0.2126 * r + 0.7152 * g + 0.0722 * b)
    }

    function plotChecked(x: number, y: number, brightness: number): void {
        x = Math.constrain(Math.round(x), 0, 4)
        y = Math.constrain(Math.round(y), 0, 4)
        led.plotBrightness(x, y, Math.constrain(Math.round(brightness), 0, 255))
    }

    /**
     * Set one pixel of the Mbits 5x5 RGB matrix to a colour.
     * On the micro:bit and in the simulator the colour is shown as a
     * brightness level (the micro:bit matrix is single-colour).
     * @param x column, 0 (left) to 4 (right)
     * @param y row, 0 (top) to 4 (bottom)
     * @param color the RGB colour to show
     */
    //% block="Mbits set pixel x %x y %y to %color"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% weight=100
    export function setPixelColor(x: number, y: number, color: MbitsColor): void {
        plotChecked(x, y, luminance(color))
    }

    /**
     * Set one pixel of the Mbits 5x5 RGB matrix from red/green/blue values.
     * Handy for teaching how RGB colours mix.
     * @param x column, 0 (left) to 4 (right)
     * @param y row, 0 (top) to 4 (bottom)
     */
    //% block="Mbits set pixel x %x y %y to red %r green %g blue %b"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    //% r.min=0 r.max=255 g.min=0 g.max=255 b.min=0 b.max=255
    //% weight=90
    export function setPixelRGB(x: number, y: number, r: number, g: number, b: number): void {
        plotChecked(x, y, luminance(packRGB(r, g, b)))
    }

    /**
     * Fill the whole Mbits 5x5 RGB matrix with one colour.
     */
    //% block="Mbits fill matrix with %color"
    //% weight=80
    export function fillColor(color: MbitsColor): void {
        const bright = luminance(color)
        for (let x = 0; x <= 4; x++) {
            for (let y = 0; y <= 4; y++) {
                led.plotBrightness(x, y, bright)
            }
        }
    }

    /**
     * Show a rainbow wave across the Mbits 5x5 RGB matrix.
     * Rendered as a brightness wave on single-colour matrices.
     */
    //% block="Mbits show rainbow"
    //% weight=70
    export function showRainbow(): void {
        for (let x = 0; x <= 4; x++) {
            const bright = 128 + Math.round(127 * Math.sin(x * Math.PI * 2 / 5))
            for (let y = 0; y <= 4; y++) {
                led.plotBrightness(x, y, bright)
            }
        }
    }

    /**
     * The brightness (0-255) that a colour becomes on a single-colour
     * 5x5 matrix. White is brightest, black is 0 (off).
     */
    //% block="Mbits brightness of %color"
    //% weight=60
    export function colorBrightness(color: MbitsColor): number {
        return luminance(color)
    }

    /**
     * Turn off all 25 pixels of the Mbits 5x5 RGB matrix.
     */
    //% block="Mbits clear matrix"
    //% weight=50
    export function clearMatrix(): void {
        basic.clearScreen()
    }
}
