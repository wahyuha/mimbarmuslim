import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dalil from './Dalil.js';
import Event from './Event.js';

@observer class Info extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Event />
        );
    }
}

export default Info;