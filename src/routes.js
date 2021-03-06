import React from "react";
import { Switch, Route } from "react-router-dom";
// import JobsContainer from "./jobs/JobsContainer";
// import JobDetailsContainer from "./jobs/JobDetailsContainer";
import NotFound from "./pages/NotFound";
import AntContainer from "./AntContainer";

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={AntContainer} />
      {/*<Route exact path="/jobs" component={JobsContainer} />*/}
      {/*<Route exact path="/jobs/:number" component={JobDetailsContainer} />*/}
      {/*<Route exact path="/:city/:technology" component={JobsContainer} />*/}
      <Route exact path="/*" component={NotFound} />
    </Switch>
  </main>
);

export default Routes;
