import React from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import {  dashboard, auth, routeInterface } from "Routes";
import ScrollToTop from "components/ScrollToTop";
import BaseLayout from "layout/Auth/BaseLayout";
import AuthLayout from "layout/Auth/AuthLayout";

const childRoutes = (Layout: any, routes: Array<any>) =>
  routes.map(
    (
      { children, path, component: Component, name, header, hideFooter }: routeInterface,
      index: number
    ) =>
      children ? (
        // Route item with children
        children.map(
          (
            { path, component: Component, name, header, hideFooter }: routeInterface,
            index: number
          ) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout header={header} hideFooter={hideFooter}>
                  <ScrollToTop>
                    <Component ComponentName={name} />
                  </ScrollToTop>
                </Layout>
              }
            />
          )
        )
      ) : (
        // Route item without children
        <Route
          key={index}
          path={path}
          element={
            <Layout header={header} hideFooter={hideFooter}>
              <ScrollToTop>
                <Component ComponentName={name} />
              </ScrollToTop>

            </Layout>
          }
        />
      )
  );

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {childRoutes(AuthLayout, auth)}
        {childRoutes(BaseLayout, dashboard)}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
