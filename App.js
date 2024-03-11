
import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * <div class='container'>
 *    <div id='child'>
 *       <h1>First Child</h1> 
 *    </div>
 *    <div id='child-2'>
 *       <h3>hello</h3> 
 *    </div>
 * </div>
 *  
 *  React object to  => browser understands html tags
 */

const parent = React.createElement("div", { className: "container:"}, [
    React.createElement("div", { id: "child"}, React.createElement("h1", {},'First Child')),
    React.createElement("div", { id: "child-2"}, React.createElement("h3", {},'hello')),
]);

console.log('object', parent);

const root = document.getElementById('root');
const render = ReactDOM.createRoot(root)

render.render(parent);