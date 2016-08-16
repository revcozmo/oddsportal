'use strict';
import React from 'react';
import {Accordion as SafonaAccordion, AccordionItem as SafonaAccordionItem} from 'react-sanfona';

export default class Accordion extends React.Component {
    createAccordion(pConf) {
        return <SafonaAccordion allowMultiple={true}>{pConf.map((pItem, pIndex, pArr) => (
            <SafonaAccordionItem key={pIndex} {...pItem}>
                {(pItem.type === 'Accordion') ? <SafonaAccordion
                    allowMultiple={true}>
                    {this.createAccordion(pItem.children)}
                </SafonaAccordion> :
                    <table>
                        <tbody>{pItem.children.map((pItem, pIndex) => (
                            <tr className={(pIndex%2) ? 'accordionItemBodyOdd' : 'accordionItemBodyEven'}
                                key={pIndex}>
                                <td>{pItem.time}</td>
                                <td>{pItem.team1}</td>
                                <td>{pItem.b1}</td>
                                <td>{pItem.bX}</td>
                                <td>{pItem.b2}</td>
                                <td>{pItem.team2}</td>
                            </tr>))}
                        </tbody>
                    </table>}
            </SafonaAccordionItem>
        ))}</SafonaAccordion>;
    }

    render() {
        return (
            <div>{this.createAccordion(this.props.structure)}</div>
        );
    }
}

Accordion.propTypes = {
    structure: React.PropTypes.array
};

Accordion.defaultProps = {
    structure: []
};
