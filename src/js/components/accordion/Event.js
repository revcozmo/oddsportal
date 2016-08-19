'use strict';
import React from 'react';

export default class Event extends React.Component {
    render() {
        console.log('Event render');
        return <tr onClick={this.props.onRowClick.bind(this)} className={this.props.className}>
            <td>{this.props.date}</td>
            <td>{this.props.team1}</td>
            <td>{this.props.o1}</td>
            <td>{this.props.oX}</td>
            <td>{this.props.o2}</td>
            <td>{this.props.team2}</td>
        </tr>
    }
};

Event.propTypes = {
    id: React.PropTypes.string.isRequired,
    date: React.PropTypes.string.isRequired,
    team1: React.PropTypes.string.isRequired,
    team1ID: React.PropTypes.string.isRequired,
    team2: React.PropTypes.string.isRequired,
    team2ID: React.PropTypes.string.isRequired,
    o1: React.PropTypes.string.isRequired,
    oX: React.PropTypes.string.isRequired,
    o2: React.PropTypes.string.isRequired,
    onRowClick: React.PropTypes.func.isRequired

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
    o2: '',
    onRowClick: ()=>(null)
};