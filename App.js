import React from "react";
import { ReactDOM } from "react-dom/client";


// React.createElement() => Object => HTMLElement(renderComponent);

const heading = React.createElement("h1", { id: "heading"}, 'heading');

// JSX (transpiled before it reaches the js) - PARCEL - Babel

// JSX => React.createElement() => Object => HTMLElement(renderComponent)
const jsxHeading = <h1 id="id">JSX heading :rocket:</h1>
 