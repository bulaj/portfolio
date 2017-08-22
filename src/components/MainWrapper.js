import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class MainWrapper extends PureComponent {

    render()
    {
        return (
            <Wrapper>{this.props.children}</Wrapper>
        );
    }

}

const Wrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`;
