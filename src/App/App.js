import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import Sections from '../containers/Sections/Sections';

import TopBar from '../components/TopBar';

@connect(state => {
    return {
        store: state,
    };
})
export default class App extends PureComponent {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <TopBar/>
                    <Sections/>
                </div>
            </ThemeProvider>
        );
    }

}
