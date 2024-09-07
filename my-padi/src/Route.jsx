import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Landing from "pages/Landing";
import Overview from "pages/Overview";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "landing",
      element: <Landing />,
    },
    {
      path: "overview",
      element: <Overview />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
