import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import IPhone13ProMax1 from "./components/IPhone13ProMax1";
import Desktop1 from "./components/Desktop1";
import IPadPro1292 from "./components/IPadPro1292";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/iphone-13-pro-max-1">
          <IPhone13ProMax1 androidSmall1Props={iPhone13ProMax1Data.androidSmall1Props} />
        </Route>
        <Route path="/:path(|full-project)">
          <Desktop1 iMac1Props={desktop1Data.iMac1Props} />
        </Route>
        <Route path="/ipad-pro-12-9-2">
          <IPadPro1292 iPadPro1291Props={iPadPro1292Data.iPadPro1291Props} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const androidSmall1Data = {
    overlapGroup: "/img/rectangle-2@1x.png",
    giktyuoyrt8Otroro: "giktyuoyrt8otroro",
    x759Iof6YirtiordioDo: <React.Fragment>759iof6yirtiordio<br />doidutoufo<br />uoofyfguo<br />fuofiofyo</React.Fragment>,
};

const iPhone13ProMax1Data = {
    androidSmall1Props: androidSmall1Data,
};

const iMac1Data = {
    urt67Irt7Irtio8Oro86: "urt67irt7irtio8oro86",
    rectangle3: "/img/rectangle-3@1x.png",
};

const desktop1Data = {
    iMac1Props: iMac1Data,
};

const iPadPro1291Data = {
    children: "kujkfigouiog",
};

const iPadPro1292Data = {
    iPadPro1291Props: iPadPro1291Data,
};

