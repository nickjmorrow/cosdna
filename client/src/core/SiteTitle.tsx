import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';

export const SiteTitle: React.FC = () => {
    return (
        <Container>
            <Typography fontFamilyVariant={'title'}>Sitetitle</Typography>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    align-items: center;
`;
