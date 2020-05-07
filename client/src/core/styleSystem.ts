import { generateColorShades } from '~/core/generateColorShades';

const coreColorInputs = {
    hue: 220, // hsl(220, 100%, 50%)
    middleLightness: 50,
    lightnessIncrement: 10,
    lightnessDecrement: 10,
    saturation: 55,
    saturationIncrement: 5,
    hueDecrement: 0,
};

const neutralColorInputs = {
    ...coreColorInputs,
    saturation: 10,
    middleLightness: 60,
    lightnessIncrement: 12,
    lightnessDecrement: 10,
    hue: 200, // hsl(200, 10%, 50%)
};

export const styleSystem = {
    spacing: {
        ss1: '4px',
        ss2: '8px',
        ss3: '12px',
        ss4: '16px',
        ss6: '24px',
        ss8: '32px',
        ss12: '48px',
        ss16: '64px',
        ss24: '96px',
        ss32: '128px',
        ss48: '192px',
    },
    fontFamily: {
        title: 'Jost, sans-serif',
        default: 'Lato, sans-serif',
    },
    color: {
        neutral: generateColorShades(neutralColorInputs),
        core: generateColorShades(coreColorInputs),
    },
};
