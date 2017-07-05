import React, {Component} from 'react';
import styled from 'styled-components';

import RoundImage from './RoundImage';
import FormattedMessage from './FormattedMessage';

const StyledTopBar = styled.div`
    width: 100%;
    height: 200px;
    background-color: #066295;
    padding: 0 20px;
    
    .left {
        float: left;
    }
`;

export default class TopBar extends Component {

    render() {
        return (
            <StyledTopBar>
                <RoundImage className="left" src="../../assets/fb_profile.jpg"/>
                <div className="left">
                    <FormattedMessage id="name"/>
                    <FormattedMessage id="surname"/>
                </div>
            </StyledTopBar>
        );
    }

}
