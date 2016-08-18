'use strict';
import React from 'react';
import odds from '../../../eoddsmaker_sampleOdds.json'

export default class Event extends React.Component {
    onRowClick(pEvent, pId, pReactEvent) {
        //request for data about match
        //get local file with odds
        //in real code there will be request with id from this.props.id
        // console.log(odds);
        var oddsNames = {
            '1x2' : '1X2',
            '1x2_10M' : '1X2 10min',
            '1x2_15M' : '1X2 15min',
            '1x2_30M' : '1X2 30min',
            '1x2_60M' : '1X2 60min',
            '1x2_75M' : '1X2 75min',
            '1x2_H1' : '1X2 First half',
            '1x2_H2' : '1X2 Second Half'
        };
        var a = {
            "1x2": []
        };
        odds.M.forEach(function(pItem){
            if(pItem['@K'].match('^1x2*')){
                a['1x2'].push({
                    id: pItem['@K'],
                    header: oddsNames[pItem['@K']],
                    type: 'subtype',
                    children: pItem.B.map((pItem) => ({
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
    }

    render() {
        return <tr onClick={this.onRowClick.bind(this)} className={this.props.className}>
            <td>{this.props.date}</td>
            <td>{this.props.team1}</td>
            <td>{this.props.o1}</td>
            <td>{this.props.oX}</td>
            <td>{this.props.o2}</td>
            <td>{this.props.team2}</td>
        </tr>
    }
}

Event.propTypes = {
    id: React.PropTypes.string,
    date: React.PropTypes.string,
    team1: React.PropTypes.string,
    team1ID: React.PropTypes.string,
    team2: React.PropTypes.string,
    team2ID: React.PropTypes.string,
    o1: React.PropTypes.string,
    oX: React.PropTypes.string,
    o2: React.PropTypes.string
};

Event.defaultProps = {
    id: '',
    date: '',
    team1: '',
    team1ID: '',
    team2: '',
    team2ID: '',
    o1: '',
    oX: '',
    o2: ''
};