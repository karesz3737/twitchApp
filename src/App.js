import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamList from "./components/streams/StreamList";
import StreamEdit from "./components/streams/StreamEdit";
import StreamShow from "./components/streams/StreamShow";
import Header from "./components/Header";
import StremCr from "./components/streams/StremCr";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          {/* <Route exact path="/streams/new" component={StremCr} /> */}
          <Route exact path="/streams/edit" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
          <Route exact path="/stream/show" component={StreamShow} />
          <Route exact path="/streams/oo" component={StreamCreate} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
