import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../styles/theme';

export default class Tag extends PureComponent {

    static propTypes = {
        onClick: PropTypes.func,
    }

    static defaultProps = {
        theme: theme,
        onClick: (children) => {
            console.log('I`m a tag!', children.target.innerText);
        },
    }

    render() {
        const {onClick, children} = this.props;

        return (
            <StyledTag onClick={onClick}>{children}</StyledTag>
        );
    }

}

const StyledTag = styled.span`
    display: inline-block;
    color: ${props => props.theme.colors.secondary};
    padding: ${props => props.theme.spacing.normal/1.6}px ${props => props.theme.spacing.big}px;
    margin-right: ${props => props.theme.spacing.normal}px;
    margin-bottom: ${props => props.theme.spacing.big}px;
    border-radius: 90px;
    background-color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSize.normal}px;
`;
