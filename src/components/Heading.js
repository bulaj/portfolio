import React, {Component} from 'react';

import styled from 'styled-components';

export const StyledHeading = styled.h1`
    font-size: 200px;
    font-weight: 300;
    text-align: center;
    color: #fff;

    &:hover {
        color: #ccc;
    }
`;

export default class Heading extends Component {

    render() {
        const {children} = this.props;

        return (
            <StyledHeading>
                {children}
            </StyledHeading>
        );
    }

}
