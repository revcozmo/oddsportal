'use strict';
import React from 'react';
import {Table as ReactBootstrapTable} from 'react-bootstrap';

export default class Table extends React.Component {

    onRowClick(pEvent, pId, pReactEvent){
        console.log(pEvent.currentTarget);
    }

    render() {
        return (
            <ReactBootstrapTable>
                <tbody>{this.props.data.map((pItem, pIndex) => (
                    <tr onClick={this.onRowClick} className={(pIndex%2) ? 'accordionItemBodyOdd' : 'accordionItemBodyEven'}
                        key={pIndex}>
                        <td>{pItem.time}</td>
                        <td>{pItem.team1}</td>
                        <td>{pItem.b1}</td>
                        <td>{pItem.bX}</td>
                        <td>{pItem.b2}</td>
                        <td>{pItem.team2}</td>
                    </tr>))}
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

