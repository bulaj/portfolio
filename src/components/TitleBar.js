import React, {PureComponent} from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import RoundImage from './RoundImage';

export default class TitleBar extends PureComponent {

    static defaultProps = {
        theme: theme,
    }

    render() {
        return (
            <Container>
                <RoundImage className="section-title" src="../../assets/fb_profile.jpg"/>
                {this.props.children}
            </Container>
        );
    }

}

const Container = styled.div`
    position: relative;
    font-size: 36px;
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: 400;
    margin-bottom: ${props => props.theme.spacing.big}px;
    padding: ${props => props.theme.spacing.normal}px;
    color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.primary};
            
    .section-title {
        width: 60px;
        height: 60px;
        float: left;
        margin: -7px 16px 0 8px;
    }
`;
