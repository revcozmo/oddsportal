import React from 'react';
import {Tabs as ReactBootstrapTabs, Tab as ReactBootsreapTab} from 'react-bootstrap';

export default class TabsPanel extends React.Component {
    render() {
        return <ReactBootstrapTabs defaultActiveKey={1}>
            <ReactBootsreapTab eventKey={1} title="Tab 1">Tab 1 content</ReactBootsreapTab>
            <ReactBootsreapTab eventKey={2} title="Tab 2">Tab 2 content</ReactBootsreapTab>
            <ReactBootsreapTab eventKey={3} title="Tab 3">Tab 3 content</ReactBootsreapTab>
        </ReactBootstrapTabs>
    }
}



