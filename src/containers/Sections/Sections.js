import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Section from '../../components/Section';
import MainWrapper from '../../components/MainWrapper';
import Paragraph from '../../components/Paragraph';
import Tag from '../../components/Tag';

const sections = [1,2,3,4,5,6];

@connect(state => {
    return {
        store: state,
    };
})
export default class Sections extends PureComponent {

    renderSections() {
        const renderedSections = sections.map((section, index) => {
            const sectionName = `Section name #${index+1}`;

            return <Section name={sectionName} key={index}/>;
        });
        return renderedSections;
    }

    renderSkills() {
        const categories = [
            ['telerik', 'git', 'svn'],
            ['office', 'storm', 'photoshop', 'terminal'],
            ['javascript', 'ruby', 'php', 'css', 'html', 'python'],
            ['office', 'storm', 'photoshop', 'terminal'],
            ['office', 'storm', 'photoshop', 'terminal'],
            ['telerik', 'git', 'svn'],
            ['office', 'storm', 'photoshop', 'terminal'],
            ['javascript', 'ruby', 'php', 'css', 'html', 'python'],
        ];

        return categories.map(category => category.map((skill, index) =>
            <Tag key={index}>{skill}</Tag>
        ));
    }

    render() {
        return (
            <MainWrapper>
                <StyledSections>
                    <Section name="About me">
                        <Paragraph messageId="SectionsAboutMeParagraphsP1"/>
                        <Paragraph messageId="SectionsAboutMeParagraphsP2"/>
                        <Paragraph messageId="SectionsAboutMeParagraphsP3"/>
                        <Paragraph messageId="SectionsAboutMeParagraphsP4"/>
                        <Paragraph messageId="SectionsAboutMeParagraphsP5"/>
                        <Paragraph messageId="SectionsAboutMeParagraphsP6"/>
                    </Section>
                    <Section name="Skills">
                        {this.renderSkills()}
                    </Section>
                    {this.renderSections()}
                </StyledSections>
            </MainWrapper>
        );
    }

}

const StyledSections = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    
    @media (max-width: 900px) {
        grid-template-columns: 100%;
        grid-gap: 0;
    }
`;
