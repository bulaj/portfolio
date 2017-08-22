import React, {Component} from 'react';
import locale from '../../locale/en';

export default class FormattedMessage extends Component {

    render() {
        const {id} = this.props;
        const text = locale[id];

        return (
            <span>{text}</span>
        );
    }

}
