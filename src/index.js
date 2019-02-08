import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { client } from "./apolloClient";
import Pages from "./pages";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Pages />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
