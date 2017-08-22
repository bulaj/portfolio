import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';

const ImageContainer = styled.div`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 10px solid #fff;
    box-shadow: 0px 0px 0px 10px ${props => props.theme.colors.primary};
    
    @media (max-width: 900px) {
        margin: auto;
    }
    
    > img {
        height: 100%;
    }
`;

export default class RoundImage extends Component {

    static propTypes = {
        src: PropTypes.string,
        alt: PropTypes.string,
    }

    static defaultProps = {
        src: '',
        alt: '',
        theme: theme,
        onClick: () => {
            console.log('hello')
        }
    }

    render() {
        const {src, alt, ...otherProps} = this.props;

        return (
            <ImageContainer {...otherProps} ref={c => this.image = c} onClick={() => {
                this.props.onClick()
            }}>
                <img src={src} alt={alt}/>
            </ImageContainer>
        );
    }

}
