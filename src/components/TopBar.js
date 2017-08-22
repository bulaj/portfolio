import React, {Component} from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

import MainWrapper from './MainWrapper';
import RoundImage from './RoundImage';
import FormattedMessage from './FormattedMessage';

const StyledTopBar = styled.div`
    width: 100%;
    height: 200px;
    padding: 0 20px;
    z-index: 1;
    margin-bottom: 40px;
        
    &::after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 30px;
        right: 0;
        background-color: ${props => props.theme.colors.primary};
        height: 140px;
        z-index: -1;
    }
    
    .left {
        float: left;

        @media (max-width: 900px) {
            float: none;
        }
    }
`;

const TextContainer = styled.div`
    padding: 46px 20px;
    float: left;
    color: ${props => props.theme.colors.secondary};
    font-family: ${props => props.theme.fontFamily.primary};    
    font-weight: ${props => props.theme.weights.light};

    @media (max-width: 900px) {
        display: none;
    }
`;

const NameAndSurname = styled.h1`
    font-size: 64px;
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: ${props => props.theme.weights.extraLight};
`;

const Email = styled.div`
    font-size: 20px;
    margin-left: 4px;
`;

export default class TopBar extends Component {

    static defaultProps = {
        theme: theme,
    };

    render() {
        return (
            <StyledTopBar>
                <MainWrapper>
                    <RoundImage className="left" src="../../assets/fb_profile.jpg"/>
                    <TextContainer>
                        <NameAndSurname>
                            <FormattedMessage id="name"/>&nbsp;
                            <FormattedMessage id="surname"/>
                        </NameAndSurname>
                        <Email>660 685 318 // maciek.bulczak@gmail.com</Email>
                    </TextContainer>
                </MainWrapper>
            </StyledTopBar>
        );
    }

}
