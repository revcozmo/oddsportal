'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
/*
 * Accordion component
 * display main info about matches
 */
import Accordion from './js/components/accordion/Accordion'
import App from './js/App'
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
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
                children: pItem.C.map(function (pItem) {
                    return {
                        id: pItem['@I'],
                        header: pItem['@N'],
                        children: pItem.L.map(function (pItem) {
                            return {
                                id: pItem['@I'],
                                header: pItem['@N'],
                                data: pItem.E.map(function (pItem) {
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
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute data={parser(eoddsmaker.markets.S)} component={Accordion}/>
                <Route path="/:sport" data={parser(eoddsmaker.markets.S)} component={Accordion}/>
                <Route path="/:sport/:region" data={parser(eoddsmaker.markets.S)} component={Accordion}/>
                <Route path="/:sport/:region/:league" data={parser(eoddsmaker.markets.S)} component={Accordion}/>
            </Route>
        </Router>,
        document.getElementById('content')
    );
})();

//<Route path="/:sport/:region/:league/:matchID" component={Accordion}/> - match to już inacxzej zrobiony accordion

/*
 * Postaraj się tym samym komponentem (Accordion) generowac liste eventow jak i liste z kursami
 * (mozna w ostatnim zamienic "children" na "data" i pozwoli to wykryc w rekurencji kiedy przerwac)
 *
 * nastepnie utworz cos w Table co pozwoli rozroznic czy mamy do czynienia z eventami czy z zakladami
 * wiadomo ze jesli zakaldy to bedzie potrzebna dla kazdego inna struktura tworzonej tabeli
 *
 * jak rozrozniac styl dla komponentu Table zeby wybrac potem odpowidni podkomponent do przekazani propsów??
 *
 * wydzielenie parserow do oddzielnego pliku
 * */