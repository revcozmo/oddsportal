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

/*
 -------------------------http://services.eoddsmaker.net/-------------------------
 <markets DT="GENERATION_DATETIME" CNT="EVENTS_COUNT">
 <S I="SPORT_ID" N="SPORT_NAME">
 <C I="REGION_ID" N="REGION_NAME">
 <L I="LEAGUE_ID" N="LEAGUE_NAME">
 <E I="EVENT_ID" DT="EVENT_DATETIME" T1="TEAM1_NAME" T2="TEAM2_NAME" T1I="TEAM1_ID" T2I="TEAM2_ID" BKS="NUMBER_OF_BOOKIES" >
 <M K="MARKET_CODE" N="MARKET_NAME">
 <B I="BOOKMAKER_ID" BTDT="BOT_DATE" ISLOCKED="0|1">
 <O N="ODD_NAME" V="ODD_VALUE" ISLOCKED="0|1"/>
 </B>
 </M>
 </E>
 </L>
 </C>
 </S>
 */
import eoddsmaker from './eoddsmaker_sampleData.json';

(function () {
    /*
     * Z: każdy z elementów S, R, L, E jest tablicą obiektów - nawet jeśli jest tylko jeden obiekt to musi on byc w tablicy.
     * pozwala to na znaczne uproszczenie kodu parsującego
     * jest to kod parsujacy (a raczej z tej biblioteki nie bede korzystal bo płatna i tylko
     * 15 dni free trial)
     * */

    var parser = function (pData) {
        var getEventData = function (pData) {
            return pData;
        };

        return pData.map(function (pItem) {
            return {
                id: pItem['@I'],
                header: pItem['@N'],
                type: 'sport',
                children: pItem.C.map(function (pItem) {
                    return {
                        id: pItem['@I'],
                        header: pItem['@N'],
                        type: 'region',
                        children: pItem.L.map(function (pItem) {
                            return {
                                id: pItem['@I'],
                                header: pItem['@N'],
                                type: 'league',
                                children: pItem.E.map(function (pItem) {
                                    return {
                                        id: pItem['@I'],
                                        type: 'event',
                                        date: pItem['@DT'],
                                        team1: pItem['@T1'],
                                        team1ID: pItem['@T1I'],
                                        team2: pItem['@T2'],
                                        team2ID: pItem['@T2I'],
                                        o1: "1.345",
                                        oX: "2.9",
                                        o2: "5.52"
                                    }
                                })
                            }
                        })
                    }
                })
            }
        });
    };

    ReactDOM.render(
        <Accordion data={parser(eoddsmaker.markets.S)}/>,
        document.getElementById('content')
    );
})();
