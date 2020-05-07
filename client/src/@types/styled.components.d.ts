import { styleSystem } from '~/core/styleSystem';

declare module 'styled-components' {
    export interface DefaultTheme {
        spacing: typeof styleSystem.spacing;
        fontFamily: typeof styleSystem.fontFamily;
        color: typeof styleSystem.color;
    }
}
