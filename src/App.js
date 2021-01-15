import React, { Fragment } from "react";
import { Route, Router, Switch } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamList from "./components/streams/StreamList";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import history from "./history";

function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/streams/show/:id" component={StreamShow} />
            <Route exact path="/" component={StreamList} />
            <Route exact path="/streams/edit/:id" component={StreamEdit} />
            <Route exact path="/streams/delete/:id" component={StreamDelete} />
            <Route exact path="/streams/new" component={StreamCreate} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
