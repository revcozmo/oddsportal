'use strict';
import React from 'react';
import {Table as ReactBootstrapTable} from 'react-bootstrap';
import Event from './Event';

export default class Table extends React.Component {
    render() {
        return (
            <ReactBootstrapTable>
                <tbody>{this.props.data.map((pItem, pIndex) => (
                    <Event key={pIndex}
                           className={(pIndex%2) ? 'accordionItemBodyOdd' : 'accordionItemBodyEven'}
                        {...pItem}
                    /> ))}
                </tbody>
            </ReactBootstrapTable>
        );
    }
}

Table.propTypes = {
    data: React.PropTypes.array
};

Table.defaultProps = {
    data: []
};

