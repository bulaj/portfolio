import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import Heading from '../components/Heading';
import TopBar from '../components/TopBar';

@connect(state => {
    return {
        store: state,
    };
})
export default class App extends PureComponent {

    render() {
        return (
            <div>
                <TopBar/>
                <Heading>Hello world!</Heading>
            </div>
        );
    }

}
