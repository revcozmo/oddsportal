'use strict';
import React from 'react';

export default class Odd extends React.Component {
    render() {
        return (<div/>);
    }
}

Odd.propTypes = {
    data: React.PropTypes.array
};

Odd.defaultProps = {
    data: []
};

