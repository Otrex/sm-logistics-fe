import React from "react";
import { Route, Switch } from "react-router-dom";
import { urlPath } from "@app/utils";
import routes, { settingsRoutes, otherRoutes } from "./routes";
import NavBarPanel from "@components/panels/NavBarPanel";
import HeaderPanel from "../components/HeaderPanel";

const url = urlPath("/client/dashboard");

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row h-screen overflow-hidden">
        <NavBarPanel
          routes={routes}
          settingsRoutes={settingsRoutes}
          url={url}
        />
        <div className="w-full overflow-y-scroll pb-14">
          <HeaderPanel
            showBackBtn={window.location.pathname !== url("/home")}
          />
          <div className="px-11 md:px-28 md:mt-16 mt-12">
            <Switch>
              {routes.map((route, idx) => (
                <Route exact key={idx} path={url(route.path)}>
                  <div>{route.component}</div>
                </Route>
              ))}

              {otherRoutes.map((route, idx) => (
                <Route exact key={idx} path={url(route.path)}>
                  <div>{route.component}</div>
                </Route>
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
