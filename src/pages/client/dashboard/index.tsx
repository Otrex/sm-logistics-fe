import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { urlPath } from "@app/utils";
import routes, { settingsRoutes } from "./routes";
import NavBarPanel from "@components/panels/NavBarPanel";
import ExpressPickUp from "./expressPickUp";

const url = urlPath("/client/dashboard");

const Dashboard = () => {
  return (
    <>
      {!true ? <Redirect to="/client" /> : <></>}
      <div className="flex flex-row h-screen overflow-hidden">
        <NavBarPanel
          routes={routes}
          settingsRoutes={settingsRoutes}
          url={url}
        />
        <div className="px-8 md:px-28 w-full overflow-y-scroll py-14">
          <Switch>
            {routes.map((route, idx) => (
              <Route exact key={idx} path={url(route.path)}>
                <div className="">{route.component}</div>
              </Route>
            ))}

            <Route exact path={url("/express-pickup")}>
              <ExpressPickUp />
            </Route>

            <Route exact path={url("/dashboard/logout")}>
              <></>
            </Route>
            <Route exact path={url("/dashboard/view-details/:id")}>
              hello
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
