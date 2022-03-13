import { useEffect, useState } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "../src/router";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(import.meta.env);
  });

  function RenderRoutes(
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
  ) {
    return useRoutes(routes);
  }

  return (
    <Router>
        {/* {routes.map((route) => (
          <Route key={route.path} path={route.path}>
            <route.component />
          </Route>
        ))} */}
        {/* {useRoutes(routes)} */}
        <RenderRoutes />
    </Router>
  );
}

export default App;
