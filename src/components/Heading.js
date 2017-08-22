import React, {PureComponent} from 'react';

import styled from 'styled-components';
import theme from '../styles/theme';

export const StyledHeading = styled.h1`
    font-size: 200px;
    font-weight: 300;
    text-align: center;
    color: ${props => props.theme.colors.secondary};

    &:hover {
        color: #ccc;
    }
`;

export default class Heading extends PureComponent {

    static defaultProps = {
        theme: theme,
    };

    render() {
        const {children} = this.props;

        return (
            <StyledHeading>
                {children}
            </StyledHeading>
        );
    }

}
