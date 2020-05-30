import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import App from "_root/App";
import ItemList from "pages/ItemList";
import ItemDetails from "pages/ItemDetails"

const routing = (
  <React.StrictMode>
    <Router>
      <App>
        <Route exact path="/" component={ItemList} />
        <Route exact path="/item" component={ItemDetails} />
      </App>
    </Router>
  </React.StrictMode>
);

export default routing;
