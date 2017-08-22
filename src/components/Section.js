import React, {PureComponent} from 'react';
import TitleBar from './TitleBar';
import styled from 'styled-components';
import theme from '../styles/theme';
import Paragraph from './Paragraph';
export default class Section extends PureComponent {

    static defaultProps = {
        theme: theme,
        name: 'Section name',
    }

    Lorem() {
        return (
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae distinctio mollitia quo sapiente sed. Aliquam assumenda commodi cupiditate dolor earum eligendi et laboriosam maiores nobis quos, ratione sapiente ut voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam at consequuntur cumque distinctio et exercitationem, ipsum nesciunt praesentium quam quis quo quod repellat sequi sint tenetur vero voluptate voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus autem consequatur dignissimos dolore ipsum laboriosam minima molestiae nihil nisi porro, quia rem sed temporibus veritatis voluptatibus. Eos minima veritatis voluptatum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis deleniti eaque enim et id, molestiae nam necessitatibus quidem sit? Cumque ea eligendi eveniet laborum, officia perferendis placeat sit totam voluptate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur in quidem voluptatum? Alias aliquid autem dolor esse fugit, illum, nam obcaecati optio quia quo rem reprehenderit sint, sunt? Culpa, iusto.</Paragraph>
        );
    }

    render() {
        const {name, children} = this.props;
        return (
            <StyledSection>
                <TitleBar>{name}</TitleBar>
                <TextContainer>
                    {children ? children : this.Lorem()}
                </TextContainer>
            </StyledSection>
        );
    }

}

const StyledSection = styled.div`
    margin-bottom: 20px;
        
    @media (min-width: 900px) {
        float: left;
    }
`;

const TextContainer = styled.div`
    padding: ${props => props.theme.spacing.big}px ${props => props.theme.spacing.big}px;    
`;
