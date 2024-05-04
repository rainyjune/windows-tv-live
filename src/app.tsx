import * as React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import Player from "./Player";

import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    loader: async ({ request }) => {
      // loaders can be async functions
      const res = await fetch("https://yuan-projects.github.io/YuanPlayer/demo/tvmenu.json");
      const data = await res.json();
      const urls = data.map(_data => _data.dataURL);
      const requests = urls.map((url) => fetch(url));
      const responses = await Promise.all(requests);
      const json = responses.map((response) => response.json());
      const data12 = await Promise.all(json);
      const result = []

      data.forEach((_data, index) => {
        result[index] = {
          ..._data,
          channels: [...data12[index]]
        }
      });

      return result;
    }
  },
  {
    path: "/player",
    element: <Player />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);