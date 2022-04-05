import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Spinner from "./components/LoadingSpinner";

const Home = lazy(() => import("./pages/index"));
const SignIn = lazy(() => import("./pages/signIn"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </Suspense>
  );
}

export default App;
