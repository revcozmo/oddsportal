'use strict';
import React from 'react';
import {Accordion as ReactBootstrapAccordion, Panel as ReactBootstrapPanel} from 'react-bootstrap';
import Table from './Table';

export default class Accordion extends React.Component {
    createAccordion(pConf) {
        return <ReactBootstrapAccordion>{pConf.map((pItem, pIndex, pArr) => (
            <ReactBootstrapPanel key={pIndex} eventKey={pIndex} {...pItem}>
                {(pItem.type !== 'league') ? <ReactBootstrapAccordion>
                    {this.createAccordion(pItem.children)}
                </ReactBootstrapAccordion> : <Table data={pItem.children}/>}
            </ReactBootstrapPanel>
        ))}</ReactBootstrapAccordion>;
    }

    render() {
        return (
            <div className="mainApp">{this.createAccordion(this.props.data)}</div>
        );
    }
}

Accordion.propTypes = {
    data: React.PropTypes.array
};

Accordion.defaultProps = {
    data: []
};
