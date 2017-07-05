import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.div`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border: 10px solid #fff;
    
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
    }

    render() {
        const {src, alt, ...otherProps} = this.props;

        return (
            <ImageContainer {...otherProps}>
                <img src={src} alt={alt}/>
            </ImageContainer>
        );
    }

}
