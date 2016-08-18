'use strict';
import React from 'react';
import odds from '../../../eoddsmaker_sampleOdds.json'

export default class Event extends React.Component {
    onRowClick(pEvent, pId, pReactEvent) {
        //request for data about match
        //get local file with odds
        //in real code there will be request with id from this.props.id
        console.log(odds);
        //display tabs panel
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