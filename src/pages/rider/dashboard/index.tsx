import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { urlPath } from "@app/utils";

const url = urlPath("/client");
const routes: any[] = [];
const Dashboard = () => {
  const router = (
    <Switch>
      {routes.map((route, idx) => (
        <Route exact key={idx} path={url(route.path)}>
          <div className="py-14">{route.component}</div>
        </Route>
      ))}

      <Route exact path={url("/dashboard/logout")}>
        <></>
      </Route>
      <Route exact path={url("/dashboard/view-details/:id")}>
        hello
      </Route>
    </Switch>
  );
  return (
    <>
      {!true ? <Redirect to="/client" /> : <></>}
      <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
        Hello world
      </div>
      {router}
    </>
  );
};
export default Dashboard;
