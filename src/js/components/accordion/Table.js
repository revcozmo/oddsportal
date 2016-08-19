'use strict';
import React from 'react';
import {Table as ReactBootstrapTable} from 'react-bootstrap';
import Event from './Event';
import Odd from './Odd';
import odds from '../../../eoddsmaker_sampleOdds.json'

export default class Table extends React.Component {

    onRowEventClick(pEvent, pId, pReactEvent) {
        //request for data about match
        //get local file with odds
        //in real code there will be request with id from this.props.id
        // console.log(odds);
        //console.log(this.props.id);
        var oddsNames = {
            '1x2': '1X2',
            '1x2_10M': '1X2 10min',
            '1x2_15M': '1X2 15min',
            '1x2_30M': '1X2 30min',
            '1x2_60M': '1X2 60min',
            '1x2_75M': '1X2 75min',
            '1x2_H1': '1X2 First half',
            '1x2_H2': '1X2 Second Half'
        };
        var a = {
            "1x2": []
        };
        odds.M.forEach(function (pItem) {
            if (pItem['@K'].match('^1x2*')) {
                a['1x2'].push({
                    id: pItem['@K'],
                    header: oddsNames[pItem['@K']],
                    data: pItem.B.map((pItem) => ({
                        date: pItem['@BTDT'],
                        bookmakerID: pItem['@I'],
                        "1": pItem.O[0]['@V'],
                        "X": pItem.O[1]['@V'],
                        "2": pItem.O[2]['@V']
                    }))
                });
            }
        });
        console.log(a);
        this.forceUpdate();
    }

    createEventTable() {
        return <ReactBootstrapTable>
            <tbody>{this.props.data.map((pItem, pIndex) => (
                <Event key={pIndex}
                       onRowClick={this.onRowEventClick}
                       className={(pIndex%2) ? 'accordionItemBodyOdd' : 'accordionItemBodyEven'}
                    {...pItem}
                /> ))}
            </tbody>
        </ReactBootstrapTable>
    }

    createOddTable() {
        return <ReactBootstrapTable>
            <tbody>{this.props.data.map((pItem, pIndex) => (
                <Event key={pIndex}
                       onRowClick={this.onRowEventClick}
                       className={(pIndex%2) ? 'accordionItemBodyOdd' : 'accordionItemBodyEven'}
                    {...pItem}
                /> ))}
            </tbody>
        </ReactBootstrapTable>
    }

    render() {
        return ((this.props.type === 'event') ? this.createEventTable() : this.createOddTable());
    }
}

Table.propTypes = {
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.array
};

Table.defaultProps = {
    type: '',
    data: []
};

