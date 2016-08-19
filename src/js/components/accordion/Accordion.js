'use strict';
import React from 'react';
import {Accordion as ReactBootstrapAccordion, Panel as ReactBootstrapPanel} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import {Link} from 'react-router';
import Table from './Table';

export default class Accordion extends React.Component {

    /**
     * From some unknown reason Link(or LinkContainer) not works in accordion.
     * In this case onEnter method manually redirect to proper page link
     *
     * @param pConf
     * @returns {XML}
     */
    createAccordion(pConf) {
        console.log(this.props.params);
        return <ReactBootstrapAccordion>{pConf.map((pItem, pIndex, pArr) => (
            <ReactBootstrapPanel key={pIndex} eventKey={pIndex} {...pItem}
                                 header={<LinkContainer to={{pathname: '/50'}}>{pItem.header}</LinkContainer>}>
                {!(pItem.hasOwnProperty('data')) ? <ReactBootstrapAccordion>
                    {this.createAccordion(pItem.children)}
                </ReactBootstrapAccordion> : <Table type={this.props.type} data={pItem.data}/>}
            </ReactBootstrapPanel>
        ))}</ReactBootstrapAccordion>;
    }
    render() {
        return (
            <div className="mainApp">{this.createAccordion(this.props.route.data)}</div>
        );
    }
}

//onEnter={function(){window.location.hash = '#/50'}}

Accordion.propTypes = {
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.array
};

Accordion.defaultProps = {
    type: '',
    data: []
};
