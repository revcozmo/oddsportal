'use strict';
import React from 'react';
import {Accordion as SafonaAccordion, AccordionItem as SafonaAccordionItem} from 'react-sanfona';
import Table from './Table';

export default class Accordion extends React.Component {
    createAccordion(pConf) {
        return <SafonaAccordion allowMultiple={true}>{pConf.map((pItem, pIndex, pArr) => (
            <SafonaAccordionItem key={pIndex} {...pItem}>
                {(pItem.type === 'Accordion') ? <SafonaAccordion
                    allowMultiple={true}>
                    {this.createAccordion(pItem.children)}
                </SafonaAccordion> : <Table data={pItem.children}/>}
            </SafonaAccordionItem>
        ))}</SafonaAccordion>;
    }

    render() {
        return (
            <div className="mainApp">{this.createAccordion(this.props.structure)}</div>
        );
    }
}

Accordion.propTypes = {
    structure: React.PropTypes.array
};

Accordion.defaultProps = {
    structure: []
};
