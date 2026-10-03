# mbits — Elecrow Mbits extension for MakeCode

A Microsoft MakeCode extension for the **[Elecrow Mbits](https://www.elecrow.com/blog/the-best-micro:bit-alternative-mbits.html)** board —
the pocket-size, micro:bit-form-factor board built on the **ESP32-WROVER-B**.

The Mbits' headline feature versus the micro:bit is its **5×5 RGB LED matrix**
(the micro:bit has a single-colour red matrix). This extension adds blocks for
that RGB matrix to the MakeCode editor.

## Blocks

| Block | What it does |
|---|---|
| `Mbits set pixel x … y … to …` | Set one pixel of the 5×5 matrix to a named colour |
| `Mbits set pixel x … y … to red … green … blue …` | Set one pixel from RGB values (0–255) — great for teaching colour mixing |
| `Mbits fill matrix with …` | Fill all 25 pixels with one colour |
| `Mbits show rainbow` | Show a rainbow wave across the matrix |
| `Mbits brightness of …` | Reporter: the brightness (0–255) a colour becomes on a single-colour matrix |
| `Mbits clear matrix` | Turn all 25 pixels off |

Coordinates: `x` = column 0 (left) → 4 (right), `y` = row 0 (top) → 4 (bottom).

## How to add it in MakeCode

1. Open https://makecode.microbit.org/
2. Click **Extensions**
3. Paste this URL into the search box and press Enter:

   ```
   https://github.com/doitmdy/pxt-mbits
   ```

4. Click the **mbits** card. A new **Mbits** toolbox category appears.

> Tip: searching by name (`mbits`) also works, but GitHub needs a few hours to
> index a new repository — pasting the URL above works immediately.

## မြန်မာလို အသုံးပြုနည်း

1. https://makecode.microbit.org/ ကိုဖွင့်ပါ
2. **Extensions** ကိုနှိပ်ပါ
3. search box ထဲမှာ `https://github.com/doitmdy/pxt-mbits` လို့ရိုက်ထည့်ပြီး Enter နှိပ်ပါ
4. **mbits** card ကိုနှိပ်ပါ — toolbox ထဲမှာ **Mbits** ဆိုတဲ့ အမျိုးအစားအသစ်ပေါ်လာပါမယ်

## Important hardware note / အရေးကြီးမှတ်ချက်

These blocks run in the MakeCode editor, the simulator, and on a real
**micro:bit**. Because the micro:bit's 5×5 matrix is single-colour (red), RGB
colours are rendered as **brightness levels** (white = brightest, black = off) —
this is documented on each block.

The physical **Mbits board itself is ESP32-based** and cannot run `.hex` files
downloaded from makecode.microbit.org (those are built for the micro:bit's
Nordic nRF chip). To program the real Mbits board, use Elecrow's
**Letscode** (Scratch-style blocks) or the **Arduino IDE** — see the
[Elecrow wiki](https://www.elecrow.com/wiki/).

ဒီ block တွေက MakeCode editor၊ simulator နဲ့ micro:bit အစစ်ပေါ်မှာ အလုပ်လုပ်ပါတယ်။
micro:bit ရဲ့ 5×5 matrix က အနီတစ်ရောင်တည်းမို့ RGB အရောင်တွေကို **အလင်းအား
(brightness)** အဖြစ်ပြပါတယ်။ Mbits ကတ်အစစ် (ESP32) ပေါ်မှာ MakeCode ကနေ
download လုပ်တဲ့ `.hex` file တိုက်ရိုက်တင်လို့မရပါ — Mbits အစစ်ကိုတော့
**Letscode** (သို့) **Arduino IDE** နဲ့ program တင်ရပါတယ်။

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

## License

MIT — see [LICENSE](LICENSE).
