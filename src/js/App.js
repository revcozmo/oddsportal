// modules/App.js
import React from 'react';
//Link. Its almost identical to the <a/> tag you're used to
//except that its aware of the Router it was rendered in.

/*
 that structure is relevant to:
 <App>
 XXXX compoent which will be renderen inside app compoent
 </App>
 */
export default React.createClass({
    render() {
        //for main page should use IndexLink insted of Link because parent routes are active when child routes are active.
        // in my example '/' is the parent of everything.
        //we can also use "Link" with prop 'onlyActiveOnIndex={true}'. Effect will be the same.

        //activeStyle - is prop with style which will be aplayed when link is active
        //activeClassName - work same as activeStyle but assign a class ex: "actiClass"
        console.log('App render');
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})