import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import styled from 'styled-components';

export class Layout extends Component<{ children: React.ReactNode }> {
    render() {
        return (
            <SiteContainer>
                <NavMenu />
                <SiteBody>{this.props.children}</SiteBody>
            </SiteContainer>
        );
    }
}

const SiteContainer = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const SiteBody = styled.div`
    display: flex;
    flex: 1;
`;
