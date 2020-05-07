import * as React from 'react';
import styled, { css } from 'styled-components';
import { styleSystem } from '~/core/styleSystem';

export const Typography: React.FC<{
    children: React.ReactNode;
    fontFamilyVariant?: FontFamilyVariant;
    typographyVariant?: TypographyVariant;
    colorVariant?: ColorVariant;
}> = ({ children, fontFamilyVariant = 'default', typographyVariant = 'body', colorVariant = 'primaryDark' }) => {
    const RootNode = getHtmlElement(typographyVariant) as React.ElementType;
    return (
        <RootNode fontFamilyVariant={fontFamilyVariant} colorVariant={colorVariant}>
            {children}
        </RootNode>
    );
};

type FontFamilyVariant = 'title' | 'default';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';

type ColorVariant = 'primaryDark' | 'secondaryDark';

const getFontFamily = (fontFamilyVariant: FontFamilyVariant) => {
    switch (fontFamilyVariant) {
        case 'default':
            return styleSystem.fontFamily.default;
        case 'title':
            return styleSystem.fontFamily.title;
        default:
            throw new Error();
    }
};

const getColor = (colorVariant: ColorVariant) => {
    switch (colorVariant) {
        case 'primaryDark':
            return styleSystem.color.neutral.cs9;
        case 'secondaryDark':
            return styleSystem.color.neutral.cs7;
    }
};

type SharedProps = {
    fontFamilyVariant: FontFamilyVariant;
    colorVariant: ColorVariant;
};

const sharedStyles = css<SharedProps>`
    font-family: ${p => getFontFamily(p.fontFamilyVariant)};
    color: ${p => getColor(p.colorVariant)};
`;

const H1 = styled.h1<SharedProps>`
    ${sharedStyles};
`;
const H2 = styled.h2<SharedProps>`
    ${sharedStyles};
`;
const P = styled.p<SharedProps>`
    ${sharedStyles};
`;

const getHtmlElement = (typographyVariant: TypographyVariant) => {
    switch (typographyVariant) {
        case 'body':
            return P;
        case 'h1':
            return H1;
        case 'h2':
            return H2;
    }
};
