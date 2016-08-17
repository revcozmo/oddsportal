'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
/*
* Accordion component
* display main info about matches
*/
import Accordion from './js/components/accordion/Accordion'
//-------------------------------CSS/LESS
import './css/bootstrap.min.css';
import './less/main.less';


(function () {
    const conf = [{
        type: "Accordion",
        title: "EUROPE",
        className: "accordionItemTitle",
        children: [{
            type: "AccordionItem",
            title: "Champions League - Qualification",
            className: "accordionItemTitle",
            children: [{
                time: "20:45",
                team1: "Ajax (Ned)",
                team2: "FK Rostov (Rus)",
                b1: "3.15",
                bX: "2.00",
                b2: "1.59"
            }, {
                time: "00:56",
                team1: "Wisla",
                team2: "Cracovia",
                b1: "1.52",
                bX: "2.67",
                b2: "6.00"
            }]
        },{
            type: "AccordionItem",
            title: "222 League - Qualification",
            className: "accordionItemTitle",
            children: [{
                time: "20:45",
                team1: "Ajax (Ned)",
                team2: "FK Rostov (Rus)",
                b1: "3.15",
                bX: "2.00",
                b2: "1.59"
            }, {
                time: "00:56",
                team1: "Wisla",
                team2: "Cracovia",
                b1: "1.52",
                bX: "2.67",
                b2: "6.00"
            }]
        }, {
            type: "AccordionItem",
            title: "3333 League - Qualification",
            className: "accordionItemTitle",
            children: [{
                time: "20:45",
                team1: "Ajax (Ned)",
                team2: "FK Rostov (Rus)",
                b1: "3.15",
                bX: "2.00",
                b2: "1.59"
            }, {
                time: "00:56",
                team1: "Wisla",
                team2: "Cracovia",
                b1: "1.52",
                bX: "2.67",
                b2: "6.00"
            }]
        }]
    }, {
        type: "AccordionItem",
        title: "test_2",
        className: "accordionItemTitle",
        children: [{
            time: "12:56",
            team1: "XXArsenal",
            team2: "XXLiverpool",
            b1: "3.15",
            bX: "2.00",
            b2: "1.59"
        }, {
            time: "00:56",
            team1: "XXWisla",
            team2: "XXCracovia",
            b1: "1.60",
            bX: "2.67",
            b2: "6.00"
        }]
    }, {
        type: "AccordionItem",
        title: "Last league",
        className: "accordionItemTitle",
        children: [{
            time: "12:56",
            team1: "XXArsenal",
            team2: "XXLiverpool",
            b1: "3.15",
            bX: "2.00",
            b2: "1.59"
        }, {
            time: "00:56",
            team1: "XXWisla",
            team2: "XXCracovia",
            b1: "1.60",
            bX: "2.67",
            b2: "6.00"
        }]
    }];

    ReactDOM.render(
        <Accordion structure={conf}/>,
        document.getElementById('content')
    );
})();
