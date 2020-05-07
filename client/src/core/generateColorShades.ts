import { ColorShades } from '~/core/types/ColorShades';
export const generateColorShades = ({
    hue: h = 220,
    middleLightness: l = 50,
    saturation: s = 50,
    saturationIncrement: si = 2,
    lightnessIncrement: li = 10,
    lightnessDecrement: ld = 10,
    hueDecrement: hd = 0,
}): ColorShades => ({
    cs1: `hsl(${h}, ${s + 8 * si}%, ${l + 4 * li}%)`,
    cs2: `hsl(${h}, ${s + 4 * si}%, ${l + 3 * li}%)`,
    cs3: `hsl(${h}, ${s + 2 * si}%, ${l + 2 * li}%)`,
    cs4: `hsl(${h}, ${s + si}%, ${l + li}%)`,
    cs5: `hsl(${h}, ${s}%, ${l}%)`,
    cs6: `hsl(${h - hd}, ${s + si}%, ${l - ld}%)`,
    cs7: `hsl(${h - 2 * hd}, ${s + 2 * si}%, ${l - 2 * ld}%)`,
    cs8: `hsl(${h - 3 * hd}, ${s + 4 * si}%, ${l - 3 * ld}%)`,
    cs9: `hsl(${h - 4 * hd}, ${s + 8 * si}%, ${l - 4 * ld}%)`,
});
