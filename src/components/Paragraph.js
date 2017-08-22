import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import theme from '../styles/theme';

import FormattedMessage from './FormattedMessage';

export default class Paragraph extends PureComponent {

    static propTypes = {
        messageId: PropTypes.string,
    }

    static defaultProps = {
        theme: theme,
    }

    render() {
        const {messageId, children} = this.props;

        if (messageId) {
            return (
                <StyledParagraph>
                    <FormattedMessage id={messageId}/>
                </StyledParagraph>
            );
        }

        return (
            <StyledParagraph>{children}</StyledParagraph>
        );
    }

}

const StyledParagraph = styled.p`
    line-height: 1.5;
    hyphens: auto;
    text-align: left;
    font-size: ${props => props.theme.fontSize.normal}px;
    margin-bottom: ${props => props.theme.spacing.big}px;
    font-family: ${props => props.theme.fontFamily.primary};
`;
