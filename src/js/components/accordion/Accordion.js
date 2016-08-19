'use strict';
import React from 'react';
import {Accordion as ReactBootstrapAccordion, Panel as ReactBootstrapPanel} from 'react-bootstrap';
import Table from './Table';

export default class Accordion extends React.Component {
    createAccordion(pConf) {
        return <ReactBootstrapAccordion>{pConf.map((pItem, pIndex, pArr) => (
            <ReactBootstrapPanel key={pIndex} eventKey={pIndex} {...pItem}>
                {!(pItem.hasOwnProperty('data')) ? <ReactBootstrapAccordion>
                    {this.createAccordion(pItem.children)}
                </ReactBootstrapAccordion> : <Table type={this.props.type} data={pItem.data}/>}
            </ReactBootstrapPanel>
        ))}</ReactBootstrapAccordion>;
    }

    render() {
        console.log('Accordion render');
        return (
            <div className="mainApp">{this.createAccordion(this.props.data)}</div>
        );
    }
}

Accordion.propTypes = {
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.array
};

Accordion.defaultProps = {
    type: '',
    data: []
};
